module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // @see: https://commitlint.js.org/#/reference-rules
  rules: {
    'subject-case': [0], // subject大小写不做校验

    // 类型枚举，git提交type必须是以下类型
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证，always表示一直进行验证
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'page', // 页面修改
        'docs', // 文档变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改 CI 配置、脚本
        'revert', // 回滚 commit
        'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ],
    ],
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      // generatingByAI: '正在通过 AI 生成你的提交简短描述!..',
      // generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '提交内容(yes/no) ?',
    },
    // prettier-ignore
    types: [
        { value: 'fix',      name: '修复:     🐛  修复缺陷', emoji: '🐛' },
        { value: 'feat',     name: '特性:     ✨  新增功能', emoji: '✨' },
        { value: 'docs',     name: '文档:     📝  文档变更', emoji: '📝' },
        { value: 'page',     name: '页面:     ❇️  页面样式的修改及调整', emoji: '❇️' },
        { value: 'style',    name: '格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: '💄' },
        { value: 'refactor', name: '重构:     ♻️  代码重构（不包括 bug 修复、功能新增）', emoji: '♻️' },
        { value: 'perf',     name: '性能:     ⚡️  性能优化', emoji: '⚡️' },
        { value: 'test',     name: '测试:     ✅  添加疏漏测试或已有测试改动', emoji: '✅'},
        { value: 'build',    name: '构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）', emoji: '📦️'},
        { value: 'ci',       name: '集成:     🎡  修改 CI 配置、脚本',  emoji: '🎡'},
        { value: 'revert',   name: '回退:     ⏪️  回滚 commit',emoji: '⏪️'},
        { value: 'chore',    name: '其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）', emoji: '🔨'},
      ],
    scopes: [
      { value: 'app', name: 'app:       系统业务' },
      { value: 'home', name: 'home:      首页相关' },
      { value: 'document', name: 'account:  文档管理' },
      { value: 'files', name: 'comment:   文件管理' },
      { value: 'about', name: 'comment:   关于我们' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: '自定义范围',
    emptyScopesAlias: '空范围',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    enableMultipleScopes: true,
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: '跳过',
    customIssuePrefixAlias: '自定义Issue',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: 'app',
    defaultSubject: '',
    defaultType: 'fix',
  },
};
