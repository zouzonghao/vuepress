import { path } from '@vuepress/shared-utils'

export default (options, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: 'Turnstile'
})
