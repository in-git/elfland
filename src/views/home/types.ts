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
