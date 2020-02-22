export default function (router) {
  // router 钩子函数
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title // 标题设置
    next();
  })
}
