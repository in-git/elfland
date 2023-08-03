import pickaxe from '@/assets/market/pickaxe.png';
import { Commodity } from '../types';

export interface CommodityList {
  name: string;
  data: Commodity[];
}
const market: CommodityList[] = [
  {
    name: '杂货 ',
    data: [
      {
        name: '镐',
        price: 10,
        desc: ['有了镐才能开采矿石'],
        src: pickaxe,
      },
    ],
  },
  {
    name: '武器 ',
    data: [],
  },
];
export default market;
