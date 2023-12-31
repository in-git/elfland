import { Component, markRaw } from 'vue';
import pickaxe from '@/assets/market/pickaxe.png';
import axe from '@/assets/market/axe.png';
import { Commodity } from '../../types';
import Market from '../Market.vue';
import Weapon from '../Weapon.vue';
import MakeupArtist from '../MakeupArtist.vue';
import GamebingVue from '../Gambling.vue';

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
    ],
    component: markRaw(Market),
  },
  {
    name: '易容师',
    data: [],
    component: markRaw(MakeupArtist),
  },
  {
    name: '博弈',
    data: [],
    component: markRaw(GamebingVue),
  },
  {
    name: '武器',
    data: [],
    component: markRaw(Weapon),
  },
];
export default market;
