import { Component, markRaw } from 'vue';
import { importAssets } from '@/utils/utils';
import AdeventureList from '../AdeventureList.vue';

export interface AddventureType {
  /* 价格，未来可出售 */
  price: number;
  /* 开采数量，可累加 */
  accumulative: number;
  /* 对应的图片资源 */
  src: string;
  /* 名字 */
  name: string;
  /* 标识，和背包或者其他地方对应 */
  flag: string;
  /* 工具,用于加成收益 */
  tools: string[];
  /* 条件：当采矿时，需要改条件才能开采 */
  condition: string[];

  /* 用于一些自定义的提示,这类属性自定义即可 */
  [key: string]: any;
}

interface DataList {
  name: string;
  data: AddventureType[];
  component: Component;
}

/* 野外探险环节 */
const addventureList: DataList[] = [
  {
    name: '野外',
    component: markRaw(AdeventureList),
    data: [
      {
        src: importAssets('stage/tree.webp'),
        name: '松树',
        price: 0.1,
        accumulative: 1,
        flag: 'woods',
        tools: ['axe'],
        condition: [],
      },
      {
        src: importAssets('stage/stone.png'),
        name: '石头',
        price: 3,
        accumulative: 1,
        flag: 'stone',
        tools: ['pickaxe'],
        condition: ['pickaxe'],
      },
      {
        src: importAssets('stage/fish.png'),
        name: '鱼',
        price: 5,
        accumulative: 1,
        flag: 'fish',
        tools: ['pickaxe'],
        condition: ['pickaxe'],
      },
    ],
  },
];
export default addventureList;
