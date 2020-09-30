/**
 * 规则对象
 *
 * @export
 * @interface ConfigBean
 */
export interface ConfigBean {
  name: string;
  url: string;
  rules: RuleBean[];
}
export enum FORM_TYPE {
  Text = "Text",
  Radio = "Radio",
  Checkbox = "Checkbox",
}
export enum FILL_TYPE {
  Safe = "Safe",
  Overwrite = "Overwrite",
}
export interface RuleBean {
  /**
   * 类型，表单项内容
   *
   * @type {FORM_TYPE}
   * @memberof RuleBean
   */
  formType: FORM_TYPE;
  /**
   * 元素选择器，
   *
   * @type {string}
   * @memberof RuleBean
   */
  selector: string;

  /**
   * dom元素对应的值/内容
   *
   * @type {string}
   * @memberof RuleBean
   */
  value: string;

  /**
   * 填充类型
   *
   * @type {FILL_TYPE}
   * @memberof RuleBean
   */
  fillType: FILL_TYPE;
}
