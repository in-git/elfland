import { markRaw } from 'vue';
import { GameStageList } from '../types';
import addventureList from './data/addventure';
import CiviliztionVue from './Civilization.vue';
import market from './data/market';

const list: GameStageList[] = [
  {
    name: '探险',
    list: addventureList,
  },
  {
    name: '商店',
    list: market,
  },
  {
    name: '朝代',
    list: [
      {
        name: '原始社会 ',
        data: [],
        component: markRaw(CiviliztionVue),
      },
      {
        name: '农业文明 ',
        data: [],
      },
      {
        name: '工业革命 ',
        data: [],
      },
      {
        name: '智能世纪 ',
        data: [],
      },
      {
        name: '超能源世纪 ',
        data: [],
      },
    ],
  },
];
export default {
  list,
};
