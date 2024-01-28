---
footer: false
titleTemplate: Askama 非官方不完全文档
---

# 快速开始

:::tip 说明

- 先来一段最基础的代码
- 同样，必须是`hello world`
  :::

### 1. 安装 rust

> 都会安装吧？这里就不做过多介绍了。
>
> [Rust官网](https://www.rust-lang.org/)

### 2. 创建项目

  ```sh
  cargo new example
  ```

### 3. 安装框架

  ```sh
  cargo add askama
  ```

### 4. 在根目录下创建`templates`文件夹，然后在`templates`文件夹下创建`index.html`文件

  ```html
  Hello, {{ name }}!
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
