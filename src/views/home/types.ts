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

/* 偏向资源的类型 */
export interface Assets {
  /* 价格 */
  price: number;
  /* 数量 */
  quantity: number;
  /* 只有一定几率获取，并非100% */
  miss: number;
}

/* 对象基类 */
export interface WorldObject {
  /* 形象图片 */
  src: string;
  /* 对象名字 */
  name: string;

  attr?: Assets;
}
