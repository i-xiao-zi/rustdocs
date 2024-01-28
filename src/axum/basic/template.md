---
footer: false
titleTemplate: Axum 非官方不完全文档
---

# 模板

## 一、响应`Html`字符串
通过返回`Html`结构体，会自动给给响应添加`Content-Type: text/html`请求头。
```rust
use axum::response::Html;

async fn html() -> Html<&'static str> {
    Html("<p>Hello, World!</p>")
}
let app = Router::new()
    .route("/", get(html));
```

## 二、与`askama`集成

### 1. 安装依赖
  ```sh
  cargo add askama -F "with-axum"
  cargo add askama_axum
  ```

### 2. 添加模版
  - 在项目根目录下创建`templates`目录
  - 在`templates`目录下创建`index.html`文件
  - 在`index.html`文件中添加模版代码
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello {{name}}!</h1>
    </body>
    </html>
    ```
  - 在`src/main.rs`编写代码
    ```rust
    use axum::Router;
    use axum::routing::get;
    use axum::extract::Path;
    use tokio::net::TcpListener;
    use askama::Template;
    
    #[derive(Template)]
    #[template(path ="index.html")]
    struct HelloTemplate {
      name: String,
    }
    async fn root(Path(name): Path<String>) -> HelloTemplate {
      HelloTemplate { name }
    }
    #[tokio::main]
    async fn main() {
      let app = Router::new().route("/:name", get(root));
      let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();
      axum::serve(listener, app).await.unwrap();
    }
    ```
  - 打开浏览器，输入 `http://localhost:3000/world` 看看有什么神奇的事情发生吧！


