export interface MaterialItem {
  /* 数量 */
  quantity: number;
  /* 汇率 */
  exchangeRatio: number;
  /* 材料的名字 */
  name: string;
  miss: number;
  /* 开采效率 */
  accumulative: number;
}
/* 背包 */
export interface Material {
  woods: MaterialItem;
  stone: MaterialItem;
  fish: MaterialItem;
  iron: MaterialItem;
  copper: MaterialItem;
  gold: MaterialItem;
  [key: string]: any;
}

export interface Backpack {
  /* 名字 */
  name: string;
  flag: string;
  /* 图片 */
  src: string;
  /*  售价 */
  sellingPrice: number;
  total: number;
  effect: {
    [key: string]: any;
  };
}
