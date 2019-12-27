# vue-typescript-jest-pattern
This is based on the vue-cli 3.

Vue TypeScript(クラス構文)によるJestとvue/test-utilsのパターン集


# Vue-test-utils
[ドキュメント](https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88)によれば、ホワイトボックスのテストよりも、ブラックボックステストが推奨されています。とはいえ、何を持って「パブリックインターフェース」とみなすか議論ある所で、変化の多いUI部分ばかり見ると、テストコードの変更という余計な工数が増えます。


# コンポーネントの主なテスト項目
- templateで次の項目が正しく動作するか
  - 正しくレンダリングされているか
  - v-onは作動するか
  - v-bind:classは動作しているか
  - v-bind:attrsは動作しているか
- propsが正しく受け取れているか
- methodsが正しく動作しているか
- $emitでイベントが正しく発火するか
- slot(v-slot)が正しく動作するか
- コンポーネント同士が正しく強調しているか(結合テスト)

『後悔しないためのVueコンポーネント設計』(技術の泉シリーズ)参照






## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
