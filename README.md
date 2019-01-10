实现一个 react 包含基本的功能

## 一些注意点

使用了 typescript 需要这几个配置

```
    "jsx":"react", => 这个会把 jsx 编译成 React.createElement
    "jsxFactory":"ReactLike.createElement" => 这个是可以自定义 jsx 的编译结果
```