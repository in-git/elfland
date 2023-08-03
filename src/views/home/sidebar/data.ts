import { markRaw } from 'vue';
import { importAssets } from '@/utils/utils';
import { GameStageList } from '../types';
import AddventureVue from './AdeventureList.vue';
import MarketVue from './Market.vue';
import addventureList from './addventure';
import CiviliztionVue from './Civilization.vue';
import market from './market';

const list: GameStageList[] = [
  {
    name: '探险',
    component: markRaw(AddventureVue),
    list: addventureList,
  },
  {
    name: '商店',
    component: markRaw(MarketVue),
    list: market,
  },
  {
    name: '朝代',
    component: markRaw(CiviliztionVue),
    list: [
      {
        name: '原始社会 ',
        data: [],
      },
      {
        name: '夏朝 ',
        data: [],
      },
      {
        name: '商朝 ',
        data: [],
      },
      {
        name: '周朝 ',
        data: [],
      },
    ],
  },
];
export default {
  list,
};
