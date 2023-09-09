import {readdirSync} from 'fs'

const plugins = {
  'order-rules': {
    enabled: true,
    resolve: './src/plugins/order-rules'
  },
}
try {
  const pluginDirs = (source =>
    readdirSync(source, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name))('src/plugins')
  pluginDirs.map((item) => {
    plugins[item] = {
      enabled: true,
      resolve: './src/plugins/' + item
    }
    return item;
  })
} catch (err) {
  console.warn('please fix the path in plugins.ts')
  console.warn(err)
}

export default plugins
