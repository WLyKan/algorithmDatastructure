module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-undef":["off"],
        "no-underscore-dangle":["off","allow"],
        "indent": ["off"],
        "no-param-reassign": ["error", { "props": false }],
        "semi": ["error", "never"],
        "consistent-return": ["off"],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-restricted-syntax": ["off"],
        "no-plusplus": ["off"]
    }
};
