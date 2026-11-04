// English strings (missing keys fall back to zh.js)
export default {
  common: {
    appName: 'Matrix Calculator',
    error: 'Error',
    clear: 'Clear',
    delete: 'Del',
    back: 'Back',
    types: {
      '计算器': 'Calculator',
      'BMI计算': 'BMI',
      '家族称谓': 'Kinship',
      '三角几何': 'Triangle',
      '化学方程式': 'Chemical equation',
      '单位换算': 'Unit conversion',
      '解不等式': 'Inequality',
      '解不等式组': 'Inequality system',
      '货币换算': 'Currency',
      '进制转换': 'Base conversion',
      '随机数': 'Random number',
      '单调性': 'Monotonicity',
      '求导': 'Derivative',
      '线性回归': 'Linear regression',
      '解方程': 'Equation',
      '解方程组': 'Equation system',
      '数字大写': 'Chinese numerals (formal)',
      '数字小写': 'Chinese numerals'
    }
  },

  index: {
    appName: 'Matrix Calc',
    pinnedSection: 'Pinned',
    allSection: 'All tools',
    pinBadge: 'Pin',
    unpinnedToast: 'Unpinned',
    pinnedToast: 'Pinned: ',
    menu: {
      standard: 'Standard',
      scientific: 'Scientific',
      unit: 'Units',
      graph: 'Graph',
      triangle: 'Triangle',
      derivative: 'Derivative',
      monotonicity: 'Monotonicity',
      linearregression: 'Regression',
      bmi: 'BMI',
      currency: 'Currency',
      baseconverter: 'Number base',
      studytools: 'Formulas',
      equation: 'Equations',
      inequality: 'Inequalities',
      inequalitygroup: 'Ineq. systems',
      chemical: 'Chemistry',
      kinship: 'Kinship',
      numbercase: 'Numerals',
      random: 'Random',
      history: 'History',
      settings: 'Settings'
    }
  },

  standard: {
    labels: ['Numbers', 'Operators']
  },

  scientific: {
    labels: ['Numbers', 'Operators', 'Functions']
  },

  history: {
    title: 'History',
    clearHistory: 'Clear history',
    empty: 'No history yet',
    confirmDelete: 'Delete all history?'
  },

  historyshare: {
    scanHint: 'Scan to view this record',
    qrTitle: 'Matrix Calculator history',
    qrType: 'Type',
    qrExpr: 'Expression',
    qrResult: 'Result'
  },

  settings: {
    title: 'Settings',
    language: 'Language',
    langAuto: 'Auto',
    vibration: 'Key vibration',
    autoCalc: 'Chem auto-calc',
    autoCalcDesc1: 'When on, chemical equations are',
    autoCalcDesc2: 'computed; when off, only balanced.',
    smooth: 'Smooth curves',
    smoothDesc1: 'When on, graphs use 150 sample',
    smoothDesc2: 'points; when off, default sampling.',
    bgRun: 'Background run',
    bgRunDesc1: 'When on, the app keeps running',
    bgRunDesc2: 'in background; off stops it.',
    reward: 'Support us',
    about: 'About',
    bgOnToast: 'Background running on',
    bgOffToast: 'Background running off'
  },

  about: {
    devTeam: 'Developer',
    contributors: 'Contributors',
    website: 'Website',
    qqGroup: 'QQ group',
    moreResources: 'More resources at'
  },

  reward: {
    title: 'Support us',
    hint: 'Scan to support the developers'
  },

  bmi: {
    title: 'BMI',
    heightCm: 'Height cm',
    weightKg: 'Weight kg',
    next: 'Next',
    enter: 'Enter',
    heightWeight: 'height & weight',
    under: 'Underweight',
    normal: 'Normal',
    over: 'Overweight',
    obese: 'Obese',
    height: 'Height ',
    weight: 'Weight '
  },

  currency: {
    title: 'Currency'
  },

  baseconverter: {
    title: 'Base converter',
    output: 'Output',
    baseNames: { 2: 'Binary', 8: 'Octal', 10: 'Decimal', 16: 'Hex' }
  },

  graph: {
    labels: ['Numbers', 'Operators', 'Presets'],
    placeholder: 'Enter f(x), e.g. x^2+3x',
    draw: 'Plot',
    drawGraph: 'Plot graph'
  },

  graphresult: {
    title: 'Function graph',
    invalid: 'Invalid expression, go back to edit',
    cannotDraw: 'Cannot plot this function'
  },

  random: {
    title: 'Random number',
    min: 'Min',
    max: 'Max',
    unlimited: 'Any',
    generate: 'Go',
    tapToGenerate: 'Tap Go to generate',
    integer: 'Integer',
    float: 'Decimal'
  },

  numbercase: {
    save: 'Save',
    modeUpper: '壹',
    modeLower: '一'
  },

  unit: {
    title: 'Unit converter',
    cats: {
      length: 'Length',
      weight: 'Weight',
      temp: 'Temperature',
      area: 'Area',
      volume: 'Volume',
      data: 'Data size'
    },
    units: {
      mm: 'mm',
      cm: 'cm',
      m: 'm',
      km: 'km',
      in: 'inch',
      ft: 'foot',
      mi: 'mile',
      mg: 'mg',
      g: 'g',
      kg: 'kg',
      t: 'tonne',
      oz: 'ounce',
      lb: 'pound',
      C: '°C',
      F: '°F',
      K: 'K',
      cm2: 'cm²',
      m2: 'm²',
      km2: 'km²',
      ft2: 'sq ft',
      mu: 'mu',
      ha: 'hectare',
      ml: 'mL',
      l: 'L',
      m3: 'm³',
      tsp: 'tsp',
      cup: 'cup',
      gal: 'gallon'
    }
  },

  triangle: {
    title: 'Triangle solver',
    draw: 'Draw',
    drawTriangle: 'Draw triangle',
    triangle: 'Triangle',
    enterSides: 'Enter all three sides',
    notTriangle: 'These sides cannot form a triangle'
  },

  derivative: {
    labels: ['Numbers', 'Operators', 'Functions'],
    calc: 'Calc',
    waiting: 'Waiting for input',
    enterExpr: 'Enter an expression',
    cannotParse: 'Cannot parse',
    placeholder: 'Enter f(x), e.g. x^2+3x'
  },

  monotonicity: {
    labels: ['Numbers', 'Operators', 'Functions'],
    calc: 'Calc',
    waiting: 'Waiting for input',
    enterExpr: 'Enter an expression',
    cannotParse: 'Cannot parse',
    placeholder: 'Enter f(x), e.g. x^2-4x+3',
    constant: 'Constant function',
    notMonotonic: 'Not monotonic',
    inc: ' increasing',
    dec: ' decreasing'
  },

  linearregression: {
    labels: ['Numbers', 'Separators'],
    calc: 'Calc',
    waiting: 'Waiting for input',
    placeholder: 'Enter data, e.g. 1,2;2,3;3,5',
    enterData: 'Enter data',
    badFormat: 'Bad format, use x,y;x,y',
    badData: 'Invalid data',
    needTwo: 'Need at least 2 points',
    sameX: 'All x values equal'
  },

  equation: {
    labels: ['Numbers', 'Operators', 'Functions'],
    solve: 'Solve',
    waiting: 'Waiting for input',
    placeholder: 'Enter equation, e.g. x^2+2x+1=0',
    enterEq: 'Enter an equation',
    needEquals: 'Bad format, needs =',
    onlyQuadratic: 'Only linear/quadratic',
    useSystem: 'Has y: use a system (;)',
    noReal: 'No real solution',
    anyX: 'Any x is a solution',
    noSolution: 'No solution',
    noOrInfinite: 'None or infinitely many',
    cannotParse: 'Cannot parse',
    splitTwo: 'Separate 2 equations with ;',
    badFormat: 'Bad format'
  },

  inequality: {
    labels: ['Numbers', 'Inequality', 'Functions'],
    waiting: 'Waiting for input',
    placeholder: 'e.g. 2x+3>7',
    enterIneq: 'Enter an inequality',
    badFormat: 'Bad format',
    cannotParse: 'Cannot parse',
    allReals: 'All real numbers',
    noSolution: 'No solution',
    or: 'or'
  },

  inequalitygroup: {
    labels: ['Numbers', 'Operators', 'Functions', 'Separators'],
    waiting: 'Waiting for input',
    placeholder: 'e.g. 2x+3>7;x<6',
    enterGroup: 'Enter inequalities',
    noTranscendental: 'Transcendental not supported',
    badFormat: 'Bad format',
    cannotParse: 'Cannot parse',
    allReals: 'All real numbers',
    noSolution: 'No solution',
    or: 'or'
  },

  chemical: {
    labels: ['Common 1', 'Common 2', 'Numbers', 'Other elements', 'More elements'],
    more: 'More',
    placeholder: 'Chemical equation',
    waiting: 'Waiting for input',
    typeEquals: 'Type = to balance',
    cannotBalance: 'Cannot balance',
    enterProducts: 'Enter the products'
  },

  chemicalanalysis: {
    title: 'Equation analysis',
    enterFull: 'Enter a complete equation',
    badFormat: 'Invalid equation format',
    cannotParse: 'Cannot parse equation',
    rxnType: 'Reaction type',
    isRedox: 'This is a redox reaction',
    oxidizer: 'Oxidizing agent',
    reducer: 'Reducing agent',
    oxProduct: 'Oxidation product',
    redProduct: 'Reduction product',
    valenceChanges: 'Valence changes',
    notRedox: 'Not a redox reaction',
    decomposition: 'Decomposition',
    synthesis: 'Synthesis',
    displacement: 'Single displacement',
    doubleDisplacement: 'Double displacement',
    redoxOther: 'Redox / other',
    unknown: 'Unknown'
  },

  kinship: {
    title: 'Chinese kinship terms',
    labels: ['Parents & siblings', 'Spouse & children'],
    term: 'Term',
    pick: 'Pick a relation',
    none: 'None',
    noTerm: 'No specific term',
    of: "'s ",
    buttons: { '爸爸': 'Dad', '妈妈': 'Mom', '哥哥': 'Big bro', '弟弟': 'Lil bro', '姐姐': 'Big sis', '妹妹': 'Lil sis', '丈夫': 'Husband', '妻子': 'Wife', '儿子': 'Son', '女儿': 'Daughter' },
    words: { '爸爸': 'father', '妈妈': 'mother', '哥哥': 'elder brother', '弟弟': 'younger brother', '姐姐': 'elder sister', '妹妹': 'younger sister', '丈夫': 'husband', '妻子': 'wife', '儿子': 'son', '女儿': 'daughter' }
  },

  formulas: {
    title: 'Formulas',
    categories: 'Topics'
  }
}
