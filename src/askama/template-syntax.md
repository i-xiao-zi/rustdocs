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
在代码块内，您还可以声明变量或为变量赋值。其他模板无法导入。

