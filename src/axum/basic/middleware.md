---
footer: false
titleTemplate: Axum 非官方不完全文档
---

# 中间件
:::tip 关于中间件(`middleware`)

- `Axum`没有自己的定制中间件系统，而是与[`Tower`](https://crates.io/crates/tower)集成。
- 这意味着[`tower`](https://crates.io/crates/tower) 和 [`tower-http`](https://crates.io/crates/tower-http) 中间件的生态系统都可以与 `axum` 一起使用。
- 虽然没有必要完全理解`Tower`来编写或使用中间件 对于`Axum`，但是还是推荐至少对`Tower`的概念有一个基本的了解。
- 有关一般介绍，请参阅`Tower`的文档`tower::ServiceBuilder`。
:::

## 一、安装依赖


## 二、使用中间件


