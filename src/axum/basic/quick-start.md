---
footer: false
titleTemplate: Axum 非官方不完全文档
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
  cargo add axum
  ```

### 4. 添加依赖

  ```sh
  cargo add tokio -F full
  ```

### 5. 项目结构

  ```
  example/ (root component)
  ├─ src/
  │  └─ main.rs
  └─ Cargo.toml
  ```

### 5. 添加代码(src/main.rs)

  ```rust
  use axum::{Router, routing::get};
  use tokio::net::TcpListener;
  
  async fn root() -> &'static str {
      "Hello, World!"
  }
  
  #[tokio::main]
  async fn main() {
      let app = Router::new().route("/", get(root));
      let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();
      axum::serve(listener, app).await.unwrap();
  }
  ```

### 6. 再看看Cargo.toml文件的内容

  ```toml
  [package]
  name = "example"
  version = "0.1.0"
  edition = "2021"
  
  [dependencies]
  axum = "0.7.4"
  tokio = { version = "1.35.1", features = ["full"] }
  ```

### 7. 运行项目

  ```sh
  cargo run
  ```

> 不管怎么说，项目跑起来了
