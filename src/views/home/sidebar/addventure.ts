import { importAssets } from '@/utils/utils';
import { WorldObject } from '../types';

interface DataList {
  name: string;
  data: WorldObject[];
}
/* 野外探险环节 */
const addventureList: DataList[] = [
  {
    name: '野外',
    data: [
      {
        src: importAssets('stage/tree.webp'),
        name: '松树',
        attr: {
          price: 1,
          quantity: 0,
          miss: 0.1,
        },
      },
    ],
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
export default addventureList;
