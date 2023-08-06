/* 皮肤列表 */

import yichen from '@/assets/hero/yichen.webp';
import feiyan from '@/assets/hero/feiyan.png';
import keqing from '@/assets/hero/keqing.png';
import bingli from '@/assets/hero/bingli.png';
import sky from '@/assets/hero/sky.webp';
import skeb from '@/assets/hero/skeb.webp';
import xixi from '@/assets/hero/xixi.webp';
import lanzi from '@/assets/hero/lanzi.webp';
import maqi from '@/assets/hero/maqi.webp';
import shuangzi from '@/assets/hero/shuangzi.webp';
import baihu from '@/assets/hero/baihu.webp';
import yunai from '@/assets/hero/yunai.webp';
import yangweiyu from '@/assets/hero/yangweiyu.webp';
import baizi from '@/assets/hero/baizi.webp';
import leibing from '@/assets/hero/leibing.webp';
import viola from '@/assets/hero/viola.webp';

export interface SkinType {
  src: string;
  name: string;
  price: number;
}

export const skinList: SkinType[] = [
  {
    src: lanzi,
    name: '兰梓',
    price: 1000,
  },
  {
    src: maqi,
    name: '马琪',
    price: 1000,
  },
  {
    src: skeb,
    name: 'skeb',
    price: 3000,
  },
  {
    src: yangweiyu,
    name: '央未雨',
    price: 3200,
  },
  {
    src: baihu,
    name: '百户',
    price: 4000,
  },
  {
    src: baizi,
    name: '白田',
    price: 4200,
  },
  {
    src: leibing,
    name: '蕾冰',
    price: 2000,
  },
  {
    src: yunai,
    name: '雨赖',
    price: 7000,
  },
  {
    src: xixi,
    name: '兮兮',
    price: 7200,
  },
  {
    src: shuangzi,
    name: '双子',
    price: 10000,
  },
  {
    src: yichen,
    name: '依晨',
    price: 10200,
  },
  {
    src: viola,
    name: 'Viola',
    price: 14000,
  },
  {
    src: feiyan,
    name: '菲烟',
    price: 14800,
  },
  {
    src: keqing,
    name: '天晴',
    price: 24000,
  },
  {
    src: bingli,
    name: '冰粒',
    price: 28000,
  },
  {
    src: sky,
    name: 'sky',
    price: 40000,
  },
];
