import tree from '@/assets/stage/tree.webp';
import stone from '@/assets/stage/stone.png';
import iron from '@/assets/stage/iron.png';
import copper from '@/assets/stage/copper.webp';
import { AddventureType } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const assetsData: AddventureType[] = [
  {
    src: tree,
    name: '松树',
    flag: 'woods',
  },
  {
    src: stone,
    name: '石头',
    flag: 'stone',
  },
  {
    src: copper,
    name: '铜',
    flag: 'copper',
  },
  {
    src: iron,
    name: '铁',
    flag: 'iron',
  },
];
