import pickaxe from '@/assets/market/pickaxe.png';
import axe from '@/assets/market/axe.png';
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
        name: '斧头',
        price: 10,
        desc: ['提高开采树木的效率', '降低miss几率40%'],
        src: axe,
        flag: 'axe',
        effect: {
          /* miss几率 */
          miss: -0.4,
          /* 伐木效率 */
          accumulative: 2,
        },
      },
      {
        name: '镐',
        price: 200,
        desc: ['有了镐才能开采矿石'],
        src: pickaxe,
        flag: 'pickaxe',
        effect: {},
      },
    ],
  },
  {
    name: '武器 ',
    data: [],
  },
];
export default market;
