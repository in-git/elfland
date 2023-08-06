import { markRaw } from 'vue';
import { GameStageList } from '../types';
import { assetsData } from './data/adventure';
import PrimitiveSociety from './PrimitiveSociety.vue';
import market from './data/market';
import AdeventureList from './AdeventureList.vue';

const list: GameStageList[] = [
  {
    name: '探险',
    list: [
      {
        name: '野外',
        component: markRaw(AdeventureList),
        data: assetsData,
      },
    ],
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
