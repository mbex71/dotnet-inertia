import { resolve } from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build:{
    lib:{
        entry:resolve('App/index.ts'),
        name:'App',
        fileName:'app',
        formats:['es']
    },
    rollupOptions:{
        external:['react'],
        output:{
            dir:resolve('wwwroot'),
            globals:{
                react:'React'
            }
        }
    }
  }
  
//   esbuild:{
//     jsxInject:`import React from 'react'`,
//   }
});