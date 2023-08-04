/* 皮肤列表 */

import xiaoqiao from '@/assets/hero/xiaoqiao.png';
import fenshi from '@/assets/hero/fenshi.png';
import shuiwu from '@/assets/hero/shuiwu.png';
import chandiao from '@/assets/hero/chandiao.png';
import zhenji from '@/assets/hero/zhenji.png';
import xiaokeai from '@/assets/hero/xiaokeai.png';
import feiyan from '@/assets/hero/feiyan.png';
import keqing from '@/assets/hero/keqing.png';
import bingli from '@/assets/hero/bingli.png';

export interface SkinType {
  src: string;
  name: string;
  price: number;
}

export const skinList: SkinType[] = [
  {
    src: xiaoqiao,
    name: 'A乔',
    price: 1000,
  },
  {
    src: fenshi,
    name: '西子分施',
    price: 2000,
  },
  {
    src: shuiwu,
    name: '不知水舞',
    price: 4800,
  },
  {
    src: zhenji,
    name: '真机',
    price: 7800,
  },
  {
    src: chandiao,
    name: '禅貂',
    price: 7200,
  },
  {
    src: xiaokeai,
    name: '小可爱',
    price: 12800,
  },
  {
    src: feiyan,
    name: '菲烟',
    price: 13800,
  },
  {
    src: keqing,
    name: '天晴',
    price: 15800,
  },
  {
    src: bingli,
    name: '冰粒',
    price: 20000,
  },
];
