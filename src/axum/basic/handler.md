---
footer: false
---

# 处理器

:::tip 可用于处理请求的异步函数

- 在 axum 中，`handler` 是一个异步函数,
- 它接受零个或多个`extractors`作为参数，并返回 可以转换为响应。
- 处理程序是应用程序逻辑所在的位置，也是构建 axum 应用程序的地方 通过在处理程序之间路由。
  :::

## 一、参数与参数提取器

处理程序函数是一个异步函数，它接受任意数量的 “提取器(`extractors`)”作为参数。
提取器是实现 `FromRequest` 或 `FromRequestParts` 的类型。

### 1. 常见的提取器：
常见的提取器有：
- `Path` ：提取动态路由中的参数。
- `Query` ：提取请求中的参数。
- `HeaderMap` ：提取请求头。
- `String` ：提取请求体的字符串，并确保其为有效的 UTF-8 编码。
- `Bytes` ：提取请求体中原始的请求体。
- `Json` ：提取请求体中的 JSON。
- `Request` ：提取整个请求，它包含了完整的请求信息，以便进行最大的控制。
- `Extension` ：提取请求的扩展，它用于从请求的扩展中提取数据。通常用于与处理器共享状态。

```rust
use axum::{
    extract::{Request, Json, Path, Extension, Query},
    routing::post,
    http::header::HeaderMap,
    body::{Bytes, Body},
    Router,
};
use serde_json::Value;
use std::collections::HashMap;

async fn path(Path(user_id): Path<u32>) {}
async fn query(Query(params): Query<HashMap<String, String>>) {}
async fn headers(headers: HeaderMap) {}
async fn string(body: String) {}
async fn bytes(body: Bytes) {}
async fn json(Json(payload): Json<Value>) {}
async fn request(request: Request) {}
async fn extension(Extension(state): Extension<State>) {}

#[derive(Clone)]
struct State { /* ... */ }

let app = Router::new()
    .route("/path/:user_id", post(path))
    .route("/query", post(query))
    .route("/string", post(string))
    .route("/bytes", post(bytes))
    .route("/json", post(json))
    .route("/request", post(request))
    .route("/extension", post(extension));
```

### 2. 应用多个提取器
可以应用多个提取器，这些提取器始终按照函数参数的顺序`从左到右`依次运行。
请求正文是一个异步流，只能使用一次。 因此，您只能有一个提取器来使用请求正文，并且它必须是最后一个提取器。

```rust
async fn handler(
    method: Method,
    headers: HeaderMap,
    State(state): State<AppState>,
    body: String,
) {
    // ...
}
```
如上，`method`，`headers`， `state`和`body`必须按照它们在参数列表中放置的位置`从左到右`依次运行。
`method`，`headers`，`state`不需要使用请求主体，因此它们可以放在参数列表的`左`端，放置顺序可以随意，但必须在`body`之前。

以下均是错误的写法：
* `body`不是最后一个提取器:
```rust
async fn handler(
    body: String,
    method: Method,
) {
    // ...
}
```
* 多次使用请求正文：
```rust
#[derive(Deserialize)]
struct Payload {}

async fn handler(
    string_body: String,
    bytes_body: Json<Payload>,
) {
    // ...
}
```

### 3. 可选提取器

- 如果请求不匹配，`axum`中定义的所有提取器都将拒绝该请求。 如果您希望将提取器设置为可选，您可以将其包装在：`Option`
```rust
use axum::{
    extract::Json,
    routing::post,
    Router,
};
use serde_json::Value;

async fn create_user(payload: Option<Json<Value>>) {
    if let Some(payload) = payload {
        // ...
    } else {
        // ...
    }
}

let app = Router::new().route("/users", post(create_user));
```

- 也可以将提取器用`Result`包装起来使它们成为可选的，并为您提供原因：
```rust
use axum::{
    extract::{Json, rejection::JsonRejection},
    routing::post,
    Router,
};
use serde_json::Value;

async fn create_user(payload: Result<Json<Value>, JsonRejection>) {
    match payload {
        Ok(payload) => {
            // 提取成功
        }
        Err(JsonRejection::MissingJsonContentType(_)) => {
            // 请求头中没有 `Content-Type: application/json`
        }
        Err(JsonRejection::JsonDataError(_)) => {
            // 不能将请求体解析为目标类型
        }
        Err(JsonRejection::JsonSyntaxError(_)) => {
            // 请求体中存在语法错误
        }
        Err(JsonRejection::BytesRejection(_)) => {
            //提取失败
        }
        Err(_) => {
            // 这段代码表明JsonRejection是一个被标记为#[non_exhaustive]的枚举，
            // 因此在处理JsonRejection时必须有一个万能的情况来匹配所有可能的值
        }
    }
}

let app = Router::new().route("/users", post(create_user));
```
### 4. 自定义提取器

- 实现 `FromRequestParts`

- 实现 `FromRequest`
