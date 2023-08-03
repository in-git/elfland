import { Component } from 'vue';

export interface GameStage {
  /* 场景的名字 */
  name: string;
  data: any[];
}

/* 左侧侧边栏的列表 */
export interface GameStageList {
  /* 场景的名字 */
  name: string;
  list: GameStage[];
  /* 对应的组件 */
  component?: Component;
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
