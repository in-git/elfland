import { Component } from 'vue';

export interface GameStage {
  /* 场景的名字 */
  name: string;
  component?: Component;
  data?: any[];
}
export interface AddventureType {
  /* 对应的图片资源 */
  src: string;
  /* 名字 */
  name: string;
  /* 标识，和背包或者其他地方对应 */
  flag: string;
  /* 用于一些自定义的提示,这类属性自定义即可 */
  [key: string]: any;
}
/* 左侧侧边栏的列表 */
export interface GameStageList {
  /* 场景的名字 */
  name: string;
  list: GameStage[];
}
export interface Commodity {
  name: string;
  price: number;
  /* 描述信息 */
  desc: string[];
  /* 商品图片 */
  src: string;
  /* 用于JS识别变量，读取参数 */
  flag: string;
  effect: {
    [key: string]: any;
  };
  /* 属性,作用 */
  [key: string]: any;
}
