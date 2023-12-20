//动态加载图片
export const getAssetsFile = (path) => {
  return new URL(path, import.meta.url).href
}

// 防抖
export const debounce = (t, func) => {
  let timerId = null
  return function () {
    const content = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(content, args)
    }, t)
  }
}
