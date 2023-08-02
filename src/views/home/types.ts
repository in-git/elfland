export interface GameStage {
  /* 场景的名字 */
  name: string;
  /* 场景对应的路由 */
  router: string;
}

/* 左侧侧边栏的列表 */
export interface GameStageList {
  /* 场景的名字 */
  name: string;
  list: GameStage[];
}
