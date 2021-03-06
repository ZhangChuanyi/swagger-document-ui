[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/cn-src/swagger-document-ui.svg?branch=dev)](https://travis-ci.org/cn-src/swagger-document-ui)
[![Maven Central](https://img.shields.io/maven-central/v/cn.javaer.springfox/swagger-document-ui.svg)](https://search.maven.org/search?q=g:cn.javaer.springfox%20AND%20a:swagger-document-ui&core=gav)
[![star](https://gitee.com/cn-src/swagger-document-ui/badge/star.svg?theme=dark)](https://gitee.com/cn-src/swagger-document-ui/stargazers)

# Swagger 规范接口的 UI

---

-   主要体现文档的可读性功能，给接口调用者提供接口文档，省去文档编写。
-   此项目没有类似官方的在线测试/调试功能，建议使用 Postman，Postman 默认支持 swagger 规范的接口导入，但文件夹结构不与文档一致，所以定制了 Postman 导出功能。
-   [在线样例](http://cn-src.gitee.io/swagger-document-ui/swagger-ui.html)
-   [更新日志](https://github.com/cn-src/swagger-document-ui/releases)

# 使用方式

## springfox 框架集成

-   [springfox 官方文档](http://springfox.github.io/springfox/docs/current/)

1. 移除官方 UI 依赖

```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>${springfox.version}</version>
</dependency>
```

2. 添加 swagger-document-ui 依赖

```xml
<dependency>
    <groupId>cn.javaer.springfox</groupId>
    <artifactId>swagger-document-ui</artifactId>
    <version>1.0.2</version>
</dependency>
```

## Spring Boot 集成

与 Spring Boot 集成使用是最简单的方式，推荐使用 [程序猿 DD/spring-boot-starter-swagger](https://gitee.com/didispace/spring-boot-starter-swagger)
提供的集成方式，然后你需要：

1. 排除自带 UI 依赖

```xml
<dependency>
    <groupId>com.spring4all</groupId>
    <artifactId>swagger-spring-boot-starter</artifactId>
    <version>${swagger-spring-boot-starter.version}</version>
    <!--排除自带 UI 依赖-->
    <exclusions>
        <exclusion>
            <artifactId>springfox-swagger-ui</artifactId>
            <groupId>io.springfox</groupId>
        </exclusion>
    </exclusions>
</dependency>
```

2. 添加 swagger-document-ui 依赖

```xml
<dependency>
    <groupId>cn.javaer.springfox</groupId>
    <artifactId>swagger-document-ui</artifactId>
    <version>1.0.2</version>
</dependency>
```

## 静态资源部署

> 此项目最终是生成纯静态资源，只要将 dist 目录里的静态文件部署到 web 服务器下即可使用，但前提是：你的项目中使用了 swagger 规范的 API 信息接口。

1. 其会请求 `/swagger-resources` （springfox 框架默认地址） 和 `/swagger-resources.json` （本项目新增地址） 拿到 API 信息接口地址。
2. 请求 `swagger-resources` 中配置的 `url`（优先） 或者 `location`（兼容旧版不提供 url 字段） 其应当返回 swagger 规范的 API 信息即可使用。
3. 可参考在线样例的部署方式，分支：[online-demo](https://gitee.com/cn-src/swagger-document-ui/tree/online-demo/)

# 效果预览

## 右侧文档锚点导航

![](docs/demo1.png)

## 分组选择 API

![](docs/demo2.png)

## 模糊搜索

-   支持中文，拼音，英文
-   可搜索 API 名称，分类名称，url 路径

![](docs/demo3.png)

## 导出 Postman

![](docs/demo4.png)
![](docs/postman1.png)
![](docs/postman2.png)
