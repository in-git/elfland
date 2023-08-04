/* 背包 */
export interface Material {
  quantity: number;
  /* 汇率 */
  price: number;
  /* 材料的名字 */
  name: string;
  miss: number;
  /* 开采效率 */
  accumulative: number;
  ban: boolean;
  id: string;
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
