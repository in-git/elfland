import { Component, markRaw } from 'vue';
import pickaxe from '@/assets/market/pickaxe.png';
import axe from '@/assets/market/axe.png';
import { Commodity } from '../../types';
import Market from '../Market.vue';
import Weapon from '../Weapon.vue';

export interface CommodityList {
  name: string;
  data: Commodity[];
  component?: Component;
}
const market: CommodityList[] = [
  {
    name: '杂货 ',
    data: [
      {
        name: '斧头',
        price: 10,
        desc: ['提高开采树木的效率', '降低miss几率20%'],
        src: axe,
        flag: 'woods',
        effect: {
          /* miss几率 */
          miss: 0.2,
          /* 伐木效率 */
          accumulative: 2,
        },
      },
      {
        name: '镐',
        price: 200,
        desc: ['降低Miss概率20%', '效率+1'],
        src: pickaxe,
        flag: 'stone',
        effect: {
          miss: 0.35,
          accumulative: 2,
        },
      },
    ],
    component: markRaw(Market),
  },
  {
    name: '武器 ',
    data: [],
    component: markRaw(Weapon),
  },
];
export default market;
