---
footer: false
titleTemplate: Askama 非官方不完全文档
---

# 模板语法

### 1. 变量
顶级模板变量由模板的上下文类型定义。您可以使用点(`.`)来访问变量的属性或方法。
从变量中读取数据受通常的`借用`政策的约束。 例如，
- <span v-pre>`{{ name }}`</span>从模板上下文中获取字段`name`
  ```rust
  use askama::Template;
  
  #[derive(Template)]
  #[template(source="Hello {{name}}", ext="txt")]
  struct HelloTemplate {
      name: String,
  }
  fn main() {
      println!("{}", HelloTemplate { name: "world".into()}.render().unwrap());
  }
  ```
- <span v-pre>`{{ user.name }}`</span>从模板上下文中获取`user`字段的`name`字段。
  ```rust
  use askama::Template;
  
  struct  User {
      name: String
  }
  #[derive(Template)]
  #[template(source="Hello {{user.name}}", ext="txt")]
  struct UserTemplate {
      user: User
  }
  fn main() {
      println!("{}", UserTemplate { user: User { name: "world".into() }}.render().unwrap())
  } 
  ```
### 2. 常量
您可以使用`Rust`代码中定义的常量。例如，
  ```rust
  use askama::Template;
  
  pub const USER_NAME: &'static str = "world";
  
  #[derive(Template)]
  #[template(source="Hello {{crate::USER_NAME}}", ext="txt")]
  struct HelloTemplate {}
  fn main() {
      println!("{}", HelloTemplate {}.render().unwrap());
  }
  ```
### 3. 模板内声明变量(`Assignments`)
在代码块内，您还可以声明变量或为变量赋值。( _其他模板无法导入_ )。
  ```rust
  {% let name = user.name %}
  {% let len = name.len() %}
  
  {% let val -%}
  {% if len == 0 -%}
    {% let val = "foo" -%}
  {% else -%}
    {% let val = name -%}
  {% endif -%}
  {{ val }}
  ```
### 4. 过滤器(filters)
从变量获得的值可以使用过滤器进行处理。过滤器使用管道符号(`|`)，并且可以在括号中包含可选的额外参数。
过滤器可以链接起来，在这种情况下，一个过滤器的输出将传递到下一个过滤器。

例如，<span v-pre>`{{ "{:?}"|format(name|escape) }}`</span>将从访问`name`字段获得的值中转义为`HTML`字符，并将结果字符串打印为`Rust`文字。

内置过滤器请参考 [`过滤器`](./filters.md)。

要定义您自己的过滤器，只需filters在派生`Template impl`.请注意，如果发生名称冲突，__内置过滤器优先__。

### 5. 空白控制
#### `-`控制符
`Askama`认为所有`制表符`、`空格`、`换行符`和`回车符`都是`空白`。
默认情况下，它保留模板代码中的所有`空白`，但单个尾随换行符被抑制。
但是，可以通过在开始分隔符后直接写入`减号`或在结束分隔符前写入`减号`来抑制表达式和块分隔符前后的`空格`。
  ```rust
  {%- let name = user.name %}
  {% let len = name.len() %}
  -------------1-------------------
  
  {% if len > 0 %}            ====
  
  =  {{      name         }}     =
  
  {% endif %}
  
  -------------2-------------------
  
  {%- if len > 0 %}            ====
  
  =  {{-      name         }}     =
  
  {%- endif %}
  
  -------------3-------------------
  
  {% if len > 0 -%}            ====
  
  =  {{      name         -}}     =
  
  {% endif -%}
  
  -------------4-------------------
  
  {%- if len > 0 -%}            ====
  
  =  {{-      name         -}}     =
  
  {%- endif -%}
  
  ---------------------------------
  ```
  执行结果：
  ```text
  -------------1-------------------
  
              ====
  
  =  hello     =
  
  
  
  -------------2-------------------            ====
  
  =hello     =
  
  -------------3-------------------
  
  ====
  
  =  hello=
  
  -------------4-------------------====
  
  =hello=---------------------------------
  ```
#### `+`控制符
如果空白默认控件设置为“抑制”，并且您想要 在块的一侧保留空白的`字符`或`表达式`，您需要使用`+`
