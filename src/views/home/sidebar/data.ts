import { markRaw } from 'vue';
import { GameStageList } from '../types';
import AddventureVue from './AdeventureList.vue';
/* 野外探险环节 */
const addventureList = [
  {
    name: '野外',
    data: [],
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
