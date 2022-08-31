import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "./",
  server: {
    port: 2021,
  },
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   comps: path.resolve(__dirname, 'src/components'),
    // },
    alias: [
      // @/xxx => src/xxx
      {
        find: /@\//,
        replacement: pathResolve("src") + "/",
      },
      // /comps/xxx => src/xxx
      {
        find: /\/comps\//,
        replacement: pathResolve("src/components") + "/",
      },
    ],
  },
  plugins: [vue()],
}));
