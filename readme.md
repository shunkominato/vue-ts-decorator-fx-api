# vue-ts-decorator-fx-api

## Overview

---

SPA で fx の価格を取得するアプリです

decorator を使用し、Vue TypeScript を使用しベストプラクティスを目指したもの

- component を Atomic Design で分割
- flux 設計で vuex を構築
- テストコードは jest を使用

## Description

---

component を Atomic Design で分割しているが、tmplates と pages は使用していない  
view フォルダが pages に当たる  
state などの型定義は stores/entities/Fx.ts で定義  
Axios 通信を実行するのは/stores/ApiClient.ts の ApiClient を使用する

- vuex の流れ  
  1.components or views で repositories の Actions を呼ぶ  
  2.repositories の Actions から service を呼び出す で Api を実行(Axios)  
  3.service で Api を実行(Axios)  
  4.実行後、repositories の Actions から Mutation を呼び出し、state を更新  
  5.components or views の getter にて repositories の getter を呼び、価格を取得する

- ルール  
  actions を呼ぶのは view のみに統一  
  molecules 以下は dataless  
  props down emit up  
  props を子コンポーネントで更新しない

## install

---

1.install

```bash
$ yarn install
```

2.起動

```bash
$ yarn dev
```

## test

---

```bash
$ yarn test
```
