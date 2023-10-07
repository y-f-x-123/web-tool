//动态加载图片
export const getAssetsFile = (path) => {
  return new URL(path, import.meta.url).href
}
