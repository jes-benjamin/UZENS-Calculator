# UZENS-Calculator
UZENS Calculator is a powerful calculator tool software.Originally developed for Xiaomi velaOS, it has covered Android /wearOS and several software scenarios, and is committed to making the calculation easier.

## Languages
The round-screen version (`source/`, Xiaomi Watch S4) supports Chinese and English. The language follows the watch's system language by default and can be changed in Settings → Language (Auto / 中文 / English).

Strings live in `source/src/i18n/`: `zh.js` (default), `en.js` and `formulas_en.js` (English formula handbook). Pages read them with `i18n.page('<page>')`; keys missing from `en.js` fall back to Chinese.

The app name in the watch menu comes from `manifest.json` (`${message.appName}`) and follows the system language only: `source/src/i18n/zh.json` (矩阵计算器) on Chinese watches, `source/src/i18n/defaults.json` (Matrix Calc) everywhere else.
