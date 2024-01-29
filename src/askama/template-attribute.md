---
footer: false
titleTemplate: Askama 非官方不完全文档
---

# template()的属性

:::tip 说明

- `Askama`模板是一种struct定义，它提供了与 UTF-8 编码文本文件(或内联源，见下文)相结合的模板上下文。
- `Askama`可用于生成任何类型的基于文本的格式。模板文件的扩展名可用于提示提供内容的类型。
- 模板由 __文本内容__ (按原样传递)、 __表达式__ (在渲染时被内容替换)和 __标签__ (控制模板的逻辑)组成。
- 模板语法与`Jinja`以及其衍生品(如`Twig`、`Tera`)非常相似。
  :::
`Askama` 的工作原理是为用该属性修饰的`struct`生成一个或多个特征实现`#[derive(Template)]`。 
代码生成过程采用一些可以通过`template()`属性指定的选项。

### 1. `path`: 设置模板文件的路径。
  该路径被解释为相对于配置的模板目录(默认情况下，这是`templates`目录)。
  文件扩展名用于推断转义模式。在`Web`框架集成中，路径的扩展名也可用于推断响应的内容类型(`content-type`)。
  > 不能与`source`一起使用。
  ```rust
  #[derive(Template)]
  #[template(path = "hello.html")]
  struct HelloTemplate<'a> { ... }
  ```

### 2. `source`: 直接设置模板源。
这对于测试用例或短模板非常有用。生成的路径是未定义的，这通常导致无法从其他模板引用该模板。
如果`source`已指定，`ext`则也必须指定。
> 不能与`path`一起使用。
  ```rust
  #[derive(Template)]
  #[template(source = "Hello {{ name }}")]
  struct HelloTemplate<'a> {
      name: &'a str,
  }
  ```

### 3. `ext`: 将内容类型指定为文件扩展名。
这用于推断转义模式，一些`Web`框架集成使用它来确定响应的内容类型(`content-type`)。
> 不能与`path`一起使用。
  ```rust
  #[derive(Template)]
  #[template(source = "Hello {{ name }}", ext = "txt")]
  struct HelloTemplate<'a> {
      name: &'a str,
  }
  ```

### 4. `print`：将请求的数据在编译时打印到`stdout`。
该print键可以采用四个值之一：`none`默认值不打印任何内容、`ast`打印解析的语法树、`code`打印生成的代码、`all`打印解析树和生成的代码。
  ```rust
  #[derive(Template)]
  #[template(path = "hello.html", print = "all")]
  struct HelloTemplate<'a> { ... }
  ```
  - 解析的语法树
    ```rust
    [Lit("", "Hello,", " "), Expr(WS(false, false), Var("name")),
    Lit("", "!", "\n")]
    ```
  - 生成的代码
    ```rust
    impl < 'a > ::askama::Template for HelloTemplate< 'a > {
        fn render_into(&self, writer: &mut ::std::fmt::Write) -> ::askama::Result<()> {
            write!(
                writer,
                "Hello, {expr0}!",
                expr0 = &::askama::MarkupDisplay::from(&self.name),
            )?;
            Ok(())
        }
        fn extension() -> Option<&'static str> {
            Some("html")
        }
    }
    impl < 'a > ::std::fmt::Display for HelloTemplate< 'a > {
        fn fmt(&self, f: &mut ::std::fmt::Formatter) -> ::std::fmt::Result {
            ::askama::Template::render_into(self, f).map_err(|_| ::std::fmt::Error {})
        }
    }
    ```

### 5. 项目结构

  ```
  example/ (root component)
  ├─ src/
  │  └─ main.rs
  ├─ templates/
  │  └─ index.html
  └─ Cargo.toml
  ```

### 5. 添加代码(src/main.rs)

  ```rust
  use askama::Template;
  
  #[derive(Template)]
  #[template(path ="index.html")]
  struct HelloTemplate<'a> {
      name: &'a str,
  }
  fn main() {
      println!("{}", HelloTemplate { name: "axum"}.render().unwrap())
  }
  ```

### 6. 再看看Cargo.toml文件的内容

  ```toml
  [package]
  name = "example"
  version = "0.1.0"
  edition = "2021"
  
  [dependencies]
  askama = "0.12.1"
  ```

### 7. 运行项目

  ```sh
  cargo run
  ```

> 不管怎么说，项目跑起来了
