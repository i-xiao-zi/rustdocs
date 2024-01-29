---
footer: false
titleTemplate: Askama 非官方不完全文档
---
# 配置

:::tip 说明
- 在编译时，`Askama`将从`crate`根目录（Cargo.toml目所在目录）找到的askama.toml，并从中读取可选配置值。
- 目前，这涵盖了搜索模板、自定义语法配置和转义器配置的目录。
:::

## 默认配置
```toml
[general]
# Directories to search for templates, relative to the crate root.
dirs = ["templates"]
# Unless you add a `-` in a block, whitespace characters won't be trimmed.
whitespace = "preserve"
```
