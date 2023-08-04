import { markRaw } from 'vue';
import { GameStageList } from '../types';
import addventureList from './data/addventure';
import PrimitiveSociety from './PrimitiveSociety.vue';
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
        component: markRaw(PrimitiveSociety),
      },
      {
        name: '农业文明 ',
      },
      {
        name: '工业革命 ',
      },
      {
        name: '智能世纪 ',
      },
      {
        name: '超能源世纪 ',
      },
    ],
  },
];
export default {
  list,
};
