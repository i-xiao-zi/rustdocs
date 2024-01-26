---
footer: false
---

# 路由 
```rust
pub struct Router<S = ()> { /* private fields */ }
```
## 一、路由规则

```rust
use axum::{Router, routing::get, routing::post};

Router::new()
    .route("/get", get(get_method))
    .route("/post", post(post_method))
    .route("/getpost", get(get_method).post(post_method));

async fn get_method() {}
async fn post_method() {}
```

### 说明：

#### 1. 通过Router::new()创建一个Router实例：
```rust
pub fn new() -> Self
```

#### 2. 通过route()方法添加路由，
```rust
pub fn route(self， path： &str， method_router： MethodRouter<S>) -> Self
```

1. 第一个参数`path`是路由路径，用`/`分割，每个部分可以是静态(`static`)、捕获(`capture`)、通配符(`wildcard`)，
   * **静态**：传入请求与路径完全匹配，如，
     -`/`：匹配`/`
     -`/user`: 匹配`/user`, 不匹配`/user/`
     -`/user/`: 匹配`/user/`, 不匹配`/user`
     -`/user/123`: 不匹配`/user/123/`

   * **捕获**：路径可以包含与任何单个段匹配的段，并将其捕获，捕获的值可以是0长度，如，
     - `/:key`: 匹配`/a`,不匹配`/a/`
     - `/user/:id`: 匹配`/user/`,`/user/abc`,不匹配`/user`,`/user/abc/`
     - `/user/:id/tweets`: 匹配`/user//tweets`,`/user/abc/tweets`,不匹配`/user/tweets/`,`/user/abc/tweets/`
        >      无法仅匹配类型（如数字或正则表达式），您必须在处理程序中中手动解析它。

   * **通配符**：可以以匹配所有段的路径结束，并将存储这些段，这与空段不匹配,如，
     - `/*key`: 匹配`/a`,`/a/`,不匹配`/`
     - `/user/*key`: 匹配`/user/a`，`/user/a/`，`/user/a/tweets`，不匹配`/user`，`/user/`
     - `/:id/:repo/*tree`: 你猜？

2. 第二个参数是路由方法
  ```rust
  pub struct MethodRouter<S = (), E = Infallible> {
      get: MethodEndpoint<S, E>,
      head: MethodEndpoint<S, E>,
      delete: MethodEndpoint<S, E>,
      options: MethodEndpoint<S, E>,
      patch: MethodEndpoint<S, E>,
      post: MethodEndpoint<S, E>,
      put: MethodEndpoint<S, E>,
      trace: MethodEndpoint<S, E>,
      fallback: Fallback<S, E>,
      allow_header: AllowHeader,
  }
  ```
  `axum`的`route`可以匹配`MethodEndpoint<S, E>`类型的`get`,`head`, `delete`, `options`, `patch`, `post`, `put`, `trace`等方法。
  
  * 可以是一条`route`匹配一个方法，如，
    ```rust
    Router::new()
        .route("/", get(get_method))
        .route("/", post(post_method))
        .route("/", delete(delete_method));
    ```
  
  * 也可以是一条`route`匹配多个方法，如，
    ```rust
    Router::new()
        .route("/", get(get_method).post(post_method).delete(delete_method));
    ```

3. 异常与优先级：
   * 如果一条`route`与另一条`route` 重叠，则会发生异常。
   * 静态路由（`static`）和动态路由（`capture`,`wildcard`）不被视为重叠，静态路由优先级高，动态路由优先级低。
   * 如果为空，也会触发异常，如，
     ```rust
     Router::new()
         .route("", get(|| async {}))                                                // 异常
         .route("/", get(|| async {})).route("/", post(|| async {}))                 // 正常
         .route("/abc", get(|| async {})).route("/:id", get(|| async {}))            // 正常，/abc 匹配前者
         .route("/def", get(|| async {})).route("/*path", get(|| async {}))          // 正常, /def 匹配前者
         .route("/ghi/*path", get(|| async {})).route("/ghi/:id", get(|| async {})); // 异常
     ```

## 二、路由参数提取

对于动态路由（`capture`,`wildcard`）路由参数，可以使用`Path`类型提取，如，

```rust
Router::new()
    .route("/", get(|| async {}))
    .route("/first", get(first))
    .route("/:second", get(second))
    .route("/:name/:id", get(three))
    .route("/*four", get(four);
async fn first() -> &'static str {
    "Hello, World!"
}
async fn second(Path(second): Path<String>) -> String{
    String::from(second)
}
async fn three(Path((name, id)): Path<(String, String)>) -> String{
    String::from(name).add(&id)
}
async fn four(Path(four): Path<String>) -> String{
    String::from(four)
}
```

更多信息请参考[处理器](./handler.md)。
