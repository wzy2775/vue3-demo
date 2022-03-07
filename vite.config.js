/*
 * @Autor: ziyu wang
 * @Date: 2022-01-17 17:16:02
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-07 16:39:00
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteCompression from 'vite-plugin-compression'; //打包成gzip
// import Components from 'unplugin-vue-components/vite'; //按需引入elementui
// import AutoImport from 'unplugin-auto-import/vite'; //按需引入elementui
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; //按需引入elementui
export default defineConfig({
	plugins: [
		vue(),
		/* 按需引入element ui */
		// AutoImport({
		//   resolvers: [ElementPlusResolver()],
		// }),
		// Components({
		//   resolvers: [ElementPlusResolver()],
		// }),
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz'
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	css: {
		postcss: {
			plugins: [
				//关闭打包css charset
				{
					postcssPlugin: 'internal:charset-removal',
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === 'charset') {
								atRule.remove();
							}
						}
					}
				}
			]
		},
		preprocessorOptions: {
			scss: {
				additionalData: `
                @use "@/assets/scss/variables.scss" as *;
                @use "@/assets/scss/element.scss" as *;
                `,
				charset: false //关闭charset
			}
		}
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
			}
		},
		/* 清除console、debugger */
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	server: {
		host: true,
		port: 8088,
		open: true
	}
});
