export default ({ store }) => {
  window.onNuxtReady(() => {
    syncLocalStorage(store, { key: 'becomdrill' })
  })
}

// vuex-persistedstate 廃止につき追加実装
// localStorage(優先的に採用)
//  -> vuex state(新規に定義された値を含み完成)
//    -> localStorage(stateと同期) mutations 内で実行
function syncLocalStorage(store, args) {
  const params = JSON.parse(localStorage.getItem(args.key))
  if (!params) {
    localStorage.setItem('becomdrill', JSON.stringify(store.state))
    return
  }
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      const element = params[key]
      store.commit('addState', { key, data: element })
    }
  }
}
