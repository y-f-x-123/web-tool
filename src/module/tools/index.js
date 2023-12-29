import { reactive } from 'vue'
// import { getAssetsFile } from '@/utils'

//导入tools全部的模块
const modules = import.meta.glob('./files/*.js')
let dataArray = []
let lastArray = []
const sort = [
  '常用工具',
  '图片处理',
  'css工具',
  'UI灵感',
  '图标',
  'chatGPT',
  'Chrome插件',
  'vscode插件',
  'UI框架',
  'PDF工具',
  '其他工具',
  '更多导航'
]
/**
 * 默认工具中的本地icon为 'src/assets/icons',
 * 不可更改
 * https://cssgradient.io/images/favicon-23859487.png
 */

for (const path in modules) {
  const mod = await modules[path]()
  let { collection, iconPath } = mod.default
  if (Array.isArray(collection)) {
    collection = collection.map((e) => {
      e.icon = e.icon.trim()
      if (!/^http[s?]|(data:)/.test(e.icon)) {
        // if (iconPath) {
        //   e.icon = getAssetsFile(`/${iconPath}/${e.icon}`)
        // } else {
        //   e.icon = getAssetsFile('/src/assets/icons/' + e.icon)
        // }
        e.isSvg = true
      }
      return e
    })
  }

  // 对工具中的导航选项进行顺序排序
  let index = sort.indexOf(mod.default.name)
  if (index == -1) {
    // 没有排序的，即在没在sort数组中写明 导航项在哪个位置，放到后面（无序）
    lastArray.push({ ...mod.default, collection })
  } else {
    // 导航有序
    dataArray[index] = { ...mod.default, collection }
  }
}
export default reactive([...dataArray, ...lastArray])
