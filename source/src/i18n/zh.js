// 中文文案（默认语言）
export default {
  common: {
    appName: '矩阵计算器',
    error: '错误',
    clear: '清空',
    delete: '删除',
    back: '返回',
    // 历史记录类型（存储时使用中文作为标识）
    types: {
      '计算器': '计算器',
      'BMI计算': 'BMI计算',
      '家族称谓': '家族称谓',
      '三角几何': '三角几何',
      '化学方程式': '化学方程式',
      '单位换算': '单位换算',
      '解不等式': '解不等式',
      '解不等式组': '解不等式组',
      '货币换算': '货币换算',
      '进制转换': '进制转换',
      '随机数': '随机数',
      '单调性': '单调性',
      '求导': '求导',
      '线性回归': '线性回归',
      '解方程': '解方程',
      '解方程组': '解方程组',
      '数字大写': '数字大写',
      '数字小写': '数字小写'
    }
  },

  index: {
    appName: '矩阵计算器',
    pinnedSection: '置顶功能',
    allSection: '全部功能',
    pinBadge: '置顶',
    unpinnedToast: '已取消置顶',
    pinnedToast: '已置顶：',
    menu: {
      standard: '标准计算器',
      scientific: '科学计算器',
      unit: '单位换算',
      graph: '函数图像',
      triangle: '三角几何',
      derivative: '求导函数值',
      monotonicity: '函数单调性计算',
      linearregression: '线性回归计算',
      bmi: 'BMI计算',
      currency: '货币换算',
      baseconverter: '进制转换',
      studytools: '公式大全',
      equation: '解方程',
      inequality: '解不等式',
      inequalitygroup: '解不等式组',
      chemical: '化学方程式',
      kinship: '家族称谓计算',
      numbercase: '数字大小写转换',
      random: '随机数生成',
      history: '历史记录',
      settings: '设置'
    }
  },

  standard: {
    labels: ['数字输入', '运算功能']
  },

  scientific: {
    labels: ['数字输入', '运算功能', '科学函数']
  },

  history: {
    title: '历史记录',
    clearHistory: '清空历史',
    empty: '暂无历史记录',
    confirmDelete: '是否确定删除？'
  },

  historyshare: {
    scanHint: '扫码查看记录内容',
    qrTitle: '矩阵计算器历史记录',
    qrType: '类型',
    qrExpr: '表达式',
    qrResult: '结果'
  },

  settings: {
    title: '设置',
    language: '语言',
    langAuto: '自动',
    vibration: '按键震动反馈',
    autoCalc: '化学方程式自动计算',
    autoCalcDesc1: '开启后输入化学方程式将自动运算结果，',
    autoCalcDesc2: '关闭后仅进行配平。',
    smooth: '图像平滑曲线',
    smoothDesc1: '开启后函数图像采样点增至150个，',
    smoothDesc2: '曲线更平滑；关闭则使用默认采样。',
    bgRun: '应用后台运行',
    bgRunDesc1: '开启后应用退到后台仍可继续运行，',
    bgRunDesc2: '关闭后回到表盘将停止运行。',
    reward: '赞赏我们',
    about: '关于应用',
    bgOnToast: '后台运行已开启',
    bgOffToast: '后台运行已关闭'
  },

  about: {
    devTeam: '开发团队',
    contributors: '参与开发的人员',
    website: '官方网站',
    qqGroup: '官方Q群',
    moreResources: '更多资源请访问'
  },

  reward: {
    title: '赞赏我们',
    hint: '扫码赞赏，支持开发者'
  },

  bmi: {
    title: 'BMI计算',
    heightCm: '身高cm',
    weightKg: '体重kg',
    next: '下一项',
    enter: '请输入',
    heightWeight: '身高和体重',
    under: '偏瘦',
    normal: '正常',
    over: '超重',
    obese: '肥胖',
    height: '身高',
    weight: '体重'
  },

  currency: {
    title: '货币换算'
  },

  baseconverter: {
    title: '进制转换',
    output: '输出',
    baseNames: { 2: '二进制', 8: '八进制', 10: '十进制', 16: '十六进制' }
  },

  graph: {
    labels: ['数字输入', '运算符号', '函数预设'],
    placeholder: '输入函数如: x^2+3x',
    draw: '绘制',
    drawGraph: '绘制图像'
  },

  graphresult: {
    title: '函数图像',
    invalid: '表达式无效，请返回修改',
    cannotDraw: '无法绘制该函数'
  },

  random: {
    title: '随机数生成',
    min: '最小值',
    max: '最大值',
    unlimited: '无限',
    generate: '生成',
    tapToGenerate: '点击生成随机数',
    integer: '整数',
    float: '浮点'
  },

  numbercase: {
    save: '记录',
    modeUpper: '大',
    modeLower: '小'
  },

  unit: {
    title: '单位换算',
    cats: {
      length: '长度',
      weight: '重量',
      temp: '温度',
      area: '面积',
      volume: '体积',
      data: '数据大小'
    },
    units: {
      mm: '毫米',
      cm: '厘米',
      m: '米',
      km: '千米',
      in: '英寸',
      ft: '英尺',
      mi: '英里',
      mg: '毫克',
      g: '克',
      kg: '千克',
      t: '吨',
      oz: '盎司',
      lb: '磅',
      C: '摄氏度',
      F: '华氏度',
      K: '开尔文',
      cm2: '平方厘米',
      m2: '平方米',
      km2: '平方千米',
      ft2: '平方英尺',
      mu: '亩',
      ha: '公顷',
      ml: '毫升',
      l: '升',
      m3: '立方米',
      tsp: '茶匙',
      cup: '杯',
      gal: '加仑'
    }
  },

  triangle: {
    title: '三角几何',
    draw: '绘制',
    drawTriangle: '绘制三角形',
    triangle: '三角形',
    enterSides: '请输入三边长度',
    notTriangle: '三边不能构成三角形'
  },

  derivative: {
    labels: ['数字输入', '运算符号', '函数符号'],
    calc: '计算',
    waiting: '等待输入',
    enterExpr: '请输入表达式',
    cannotParse: '无法解析',
    placeholder: '输入函数如: x^2+3x'
  },

  monotonicity: {
    labels: ['数字输入', '运算符号', '函数符号'],
    calc: '计算',
    waiting: '等待输入',
    enterExpr: '请输入表达式',
    cannotParse: '无法解析',
    placeholder: '输入函数如: x^2-4x+3',
    constant: '函数为常数',
    notMonotonic: '非单调函数',
    inc: '递增',
    dec: '递减'
  },

  linearregression: {
    labels: ['数字输入', '分隔符号'],
    calc: '计算',
    waiting: '等待输入',
    placeholder: '输入数据如: 1,2;2,3;3,5',
    enterData: '请输入数据',
    badFormat: '格式错误，用x,y;x,y格式',
    badData: '数据格式错误',
    needTwo: '至少需要2组数据',
    sameX: 'x值相同，无法计算'
  },

  equation: {
    labels: ['数字输入', '运算符号', '科学函数'],
    solve: '计算结果',
    waiting: '等待输入',
    placeholder: '输入方程，如 x^2+2x+1=0',
    enterEq: '请输入方程',
    needEquals: '格式错误，需包含=',
    onlyQuadratic: '仅支持一、二次方程',
    useSystem: '含y变量请用方程组(;分隔)',
    noReal: '无实数解',
    anyX: 'x为任意值',
    noSolution: '无解',
    noOrInfinite: '无解或无穷多解',
    cannotParse: '无法解析',
    splitTwo: '请用;分隔两个方程',
    badFormat: '格式错误'
  },

  inequality: {
    labels: ['数字输入', '不等号', '科学函数'],
    waiting: '等待输入',
    placeholder: '如: 2x+3>7',
    enterIneq: '请输入不等式',
    badFormat: '格式错误',
    cannotParse: '无法解析',
    allReals: '全体实数',
    noSolution: '无解',
    or: '或'
  },

  inequalitygroup: {
    labels: ['数字输入', '运算符', '科学函数', '分隔符'],
    waiting: '等待输入',
    placeholder: '如: 2x+3>7;x<6',
    enterGroup: '请输入不等式组',
    noTranscendental: '暂不支持超越函数组',
    badFormat: '格式错误',
    cannotParse: '无法解析',
    allReals: '全体实数',
    noSolution: '无解',
    or: '或'
  },

  chemical: {
    labels: ['常见元素1', '常见元素2', '数字符号', '其他元素', '更多元素'],
    more: '更多',
    placeholder: '化学方程式',
    waiting: '等待输入',
    typeEquals: '输入 = 配平',
    cannotBalance: '无法配平',
    enterProducts: '请输入生成物'
  },

  chemicalanalysis: {
    title: '方程式分析',
    enterFull: '请输入完整方程式',
    badFormat: '方程式格式错误',
    cannotParse: '无法解析方程式',
    rxnType: '反应类型',
    isRedox: '该反应为氧化还原反应',
    oxidizer: '氧化剂',
    reducer: '还原剂',
    oxProduct: '氧化产物',
    redProduct: '还原产物',
    valenceChanges: '化合价变化',
    notRedox: '该反应为非氧化还原反应',
    decomposition: '分解反应',
    synthesis: '化合反应',
    displacement: '置换反应',
    doubleDisplacement: '复分解反应',
    redoxOther: '氧化还原反应/其他',
    unknown: '未知'
  },

  kinship: {
    title: '家族称谓计算',
    labels: ['直系长辈同辈', '配偶子辈'],
    term: '称谓',
    pick: '请选择关系',
    none: '未选择',
    noTerm: '',
    of: '的',
    buttons: { '爸爸': '爸爸', '妈妈': '妈妈', '哥哥': '哥哥', '弟弟': '弟弟', '姐姐': '姐姐', '妹妹': '妹妹', '丈夫': '丈夫', '妻子': '妻子', '儿子': '儿子', '女儿': '女儿' },
    words: { '爸爸': '爸爸', '妈妈': '妈妈', '哥哥': '哥哥', '弟弟': '弟弟', '姐姐': '姐姐', '妹妹': '妹妹', '丈夫': '丈夫', '妻子': '妻子', '儿子': '儿子', '女儿': '女儿' }
  },

  formulas: {
    title: '公式大全',
    categories: '类型'
  }
}
