/*
 * @Autor: ziyu wang
 * @Date: 2022-02-22 16:23:24
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-23 10:09:35
 * @Description:
 */
module.exports = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: true, // 分号
	vueIndentScriptAndStyle: true,
	singleQuote: true, // 单引号
	quoteProps: 'as-needed', //仅在需要时在对象属性周围添加引号
	bracketSpacing: true, //true - 格式化结果为 : { foo: bar } false - 格式化结果为 : {foo: bar}
	trailingComma: 'none', // 未尾分号
	jsxBracketSameLine: true, //末尾添加 > 不单独成行
	jsxSingleQuote: true, //在JSX中使用单引号
	arrowParens: 'always', //true - 格式化结果为 : x => x;false - 格式化结果为 : (x) => x
	proseWrap: 'never',
	htmlWhitespaceSensitivity: 'strict'
};
