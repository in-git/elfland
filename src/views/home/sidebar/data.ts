import { markRaw } from 'vue';
import { importAssets } from '@/utils/utils';
import { GameStageList } from '../types';
import AddventureVue from './AdeventureList.vue';
import addventureList from './addventure';

const list: GameStageList[] = [
  {
    name: '探险',
    component: markRaw(AddventureVue),
    list: addventureList,
  },
  {
    name: '商店',
    list: [
      {
        name: '杂货 ',
        data: [],
      },
      {
        name: '武器 ',
        data: [],
      },
    ],
  },
  {
    name: '朝代',
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
