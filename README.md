# becom-drill

計算ドリルで楽しく遊ぶ

## Setup

事前に`nvm`を使えるようにしておき指定バージョンの`node.js`を使えるように

git clone にてソースコードを配置後プロジェクト配下にて指定のモジュールをインストール

```zsh
npm install
```

## Work

ローカル開発時の起動方法など

```zsh
npm run dev
```

リクエスト

```zsh
open 'http://localhost:3000/'
```

公開環境へデプロイ

```zsh
npm run generate
scp -r ~/github/becom-drill/dist/ becom2022@becom2022.sakura.ne.jp:~/www/becom-drill/
```

### HTTP

```text
https://becom-drill.becom.co.jp/
```

## Memo

### Environment

初動時の環境構築に関するメモ

公開環境

```sh
npm run generate
# 初回のみ公開環境でディレクトを作成しておく
ssh becom2022@becom2022.sakura.ne.jp
mkdir ~/www/becom-drill
# 公開環境へ `scp` コマンドで送信
scp -r ~/github/becom-drill/dist/ becom2022@becom2022.sakura.ne.jp:~/www/becom-drill/
```

#### nuxt

- nuxt.js - <https://nuxtjs.org/ja/>

こちらは初動のときのセットアップ参考までの記録

```zsh
yarn create nuxt-app becom-drill
(今回は下記のような設定をした)
...
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in becom-drill
? Project name: becom-drill
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: Bootstrap Vue
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint, Prettier
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

git のリポジトリ範囲内で実行したのでディレクトリのネストを解消したい、隠しファイルも含めて移動

```zsh
mv -n becom-drill/* becom-drill/.[^\.]* .
```

すでにファイルが存在しているものについては手動で調整し不要のディレクトリ削除

```zsh
rm -r becom-drill
```

動作確認

```zsh
yarn dev
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
