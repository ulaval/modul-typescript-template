"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
        "stylelint-scss"
    ],    
    "rules": {
        "at-rule-empty-line-before": null,
        "scss/dollar-variable-pattern": "^foo",
        "scss/selector-no-redundant-nesting-selector": true
    }
}