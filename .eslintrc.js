module.exports = {
  parser: '@typescript-eslint/parser',
  // 继承Airbnb的规则
  // extends: ['airbnb'],

  // 指定环境
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    es2021: true
  },

  // 指定全局配置
  globals: {
    document: true,
    window: true,
  },

  // 解析器选项
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },

  // 插件
  plugins: ['react', 'import', '@typescript-eslint'],

  // 规则配置
  rules: {
    // 设置代码长度
    'max-len': ['error', { code: 120 }],
    // 设置缩进2空格
    'indent': ['error', 2],
    // 语句末尾使用分号always，不使用never
    'semi': ['error', 'always'],
    // 使用单引号single，双引号double
    'quotes': ['error', 'single'],
    // 在块之前使用空格
    'space-before-blocks': ['error', 'always'],
    // 在函数参数列表前使用空格
    // 'space-before-function-paren': ['error', 'always'],
    // 在操作符之间使用空格
    'space-infix-ops': 'error',
    // 在 'return' 后面使用空格
    // 'space-return-throw-case': 'error',
    // 链式调用时每个调用应该在新行
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    // 在函数名和括号之间不使用空格
    'func-call-spacing': ['error', 'never'],
    // 逗号放在行末（last）或行首（first）
    'comma-style': ['error', 'last'],
    // 在箭头函数的箭头前后使用空格
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    // 在模板字符串的花括号内不使用空格
    'template-curly-spacing': ['error', 'never'],
    // 数组括号和元素之间不使用空格
    'array-bracket-spacing': ['error', 'never'],
    // 对象属性和值之间使用空格
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    // 允许使用未声明的变量，如React/ReactDOM
    'no-undef': 'off',

    // 允许console.log
    'no-console': 'off',
    // 允许debugger
    'no-debugger': 'off',
    // 允许使用箭头函数
    'prefer-object-spread': 'off',
    // 允许使用未声明的变量
    // 'no-unused-vars': ['error', { args: 'none' }],
    // 允许使用未声明的变量
    // 'import/no-unresolved': 'off',
    // 不能使用未导入的模块
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    // 允许使用import statements
    'global-require': 'off',
    // 允许使用for...in循环
    'guard-for-in': 'off',
    // 关闭prettier的规则
    'prettier/prettier': 'off',
    // 关闭不在 package.json 中声明的依赖项的校验
    'import/no-extraneous-dependencies': 'off',
    // 'import/no-unresolved': 'error'
    // 导入顺序
    'import/order': [
      'error',
      {
        // 对导入模块进行分组
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'unknown'
        ],
        // 通过路径自定义分组
        pathGroups: [
          {
            // pattern：当前组中模块的最短路径匹配
            // 在规定的组中选其一，index、sibling、parent、internal、
            //           external、builtin、object、type、unknown
            pattern: '@app/**',
            group: 'external',
            // 定义组的位置，after、before
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        // newlines-between 不同组之间是否进行换行
        'newlines-between': 'always',
      }
    ],
    // 连续空行
    'no-multiple-empty-lines': ['error', { max: 1 }], // 允许最大连续空行数为1
  },
};