# becom-drill

計算ドリルで楽しく遊ぶ

## Work

becom-drill での開発作業の手順

github でイシューを作成

イシューのナンバーを使いプルリクエストを作成

```zsh
# (例: イシューのタイトルが 「認証機能 #5」 の場合)
git fetch origin
git checkout -b dev#5 origin/main
git commit -m 'pullreq commit' --allow-empty
git push origin dev#5
```

作業終了後 github へ反映

```zsh
# (例: ブランチが dev#5 の場合)
git add .
git commit -m 'update'
git push origin dev#5
```

github のプルリク機能側で main ブランチにマージ

不要になったローカルのブランチは削除

```zsh
# (例: ブランチが dev#5 の場合)
git fetch && git checkout main && git pull
git branch -d dev#5
```

公開環境へ反映する場合

ローカル環境で dist 内に static なファイルを生成

```zsh
git fetch && git checkout main && git pull
git checkout dist
git merge -m 'main merge' origin/main
yarn generate
git add .
git commit -m 'generate'
git push origin dist
```

公開環境へログイン

```zsh
ssh becom@becom.sakura.ne.jp
```

公開環境のさくらレンタルサーバーにて

```csh
cd ~/www/becom-drill
git fetch && git checkout dist && git pull origin dist
```

アプリケーション起動方法

```zsh
yarn dev
```

## Setup

開発環境は Mac もくは Linux(Ubuntu)

### Middleware

#### node

- node.js - <https://nodejs.org/ja/>
  - 安定版(LTS)の最新のものを使うようにする
- nodebrew - <https://github.com/hokaccha/nodebrew>
  - 上記の資料を参考に nodebrew を使える状態にしておく

下記は nodebrew インストール後の Mac での具体的な手順

nodebrew 自体を最新にしておく

```zsh
nodebrew selfupdate
```

安定版LTSの最新のものをインストール、使えるように指定

```zsh
nodebrew install stable
nodebrew use stable
```

node.js が使える状態ということを確認しておく

```zsh
node --version
```

#### yarn

- yarn - <https://yarnpkg.com/>
  - 公式サイトの手順に従い yarn を準備

下記は node.js インストール後の Mac での具体的な手順

```zsh
npm install -g yarn
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
