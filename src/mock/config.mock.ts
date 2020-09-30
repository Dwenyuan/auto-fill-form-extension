const { mock } = require("mockjs");

export const { configs } = mock({
  "configs|2-32": [
    {
      /**
       * 类型，表单项内容
       *
       * @type {FORM_TYPE}
       * @memberof RuleBean
       */
      formType: /Text|Radio|Checkbox/,

      /**
       * 元素选择器，
       *
       * @type {string}
       * @memberof RuleBean
       */
      selector: /selector\w{29}/,

      /**
       * dom元素对应的值/内容
       *
       * @type {string}
       * @memberof RuleBean
       */
      value: "@cword",

      /**
       * 填充类型
       *
       * @type {FILL_TYPE}
       * @memberof RuleBean
       */
      fillType: /Safe|Overwrite/,
    },
  ],
});
