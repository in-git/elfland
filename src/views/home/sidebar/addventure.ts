import { importAssets } from '@/utils/utils';

export interface AddventureType {
  /* 价格，未来可出售 */
  price: number;
  /* 开采数量，可累加 */
  accumulative: number;
  /* 开采丢失概率 */
  miss: number;
  /* 对应的图片资源 */
  src: string;
  /* 名字 */
  name: string;
  /* 标识，和背包或者其他地方对应 */
  flag: string;
  /* 用于一些自定义的提示,这类属性自定义即可 */
  [key: string]: any;
}

interface DataList {
  name: string;
  data: AddventureType[];
}

/* 野外探险环节 */
const addventureList: DataList[] = [
  {
    name: '野外',
    data: [
      {
        src: importAssets('stage/tree.webp'),
        name: '松树',
        price: 1,
        miss: 0.7,
        accumulative: 1,
        flag: 'woods',
      },
    ],
  },
  {
    name: '悬崖',
    data: [],
  },
  {
    name: '坟场 ',
    data: [],
  },
  {
    name: '远古森林 ',
    data: [],
  },
  {
    name: '食人部落 ',
    data: [],
  },
];
export default addventureList;
