/**
* 前端监控
* @author 1215904405@qq.com
*/
window.addEventListener('unhandledrejection', e => { // promise
  // 防止默认处理（例如将错误输出到控制台）
  // event.preventDefault();

  // 抛出到下面的error监听里
  throw e.reason;
});

// onerror 和 addEventListener区别 前面的不能监听资源加载错误
window.addEventListener('error', args => {
  console.log('error event: ', args, location.href);
  console.log(args.message);
  if (args.error.request) {
    console.log(args.error.request.responseURL, args.error.request.status);
  }
  // 不会被上抛 控制台中看不到错误日志
  return true;
});
