import { importAssets } from '@/utils/utils';

interface AddventureData {
  /* 价格，未来可出售 */
  price: number;
  /* 已有的数量 */
  quantity: number;
  /* 开采丢失概率 */
  miss: number;
  /* 对应的图片资源 */
  src: string;
  /* 名字 */
  name: string;
}

interface DataList {
  name: string;
  data: AddventureData[];
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
        miss: 0.1,
        quantity: 0,
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
