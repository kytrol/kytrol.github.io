import { defineConfig } from 'vite'

/**
 * command = serve -> dev
 * command = build
 */
export default defineConfig(({ command, mode, isPreview }) => {
  return {
    root: 'src/'
  }
})