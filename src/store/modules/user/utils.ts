import useUserStore from './index';
import { Hero } from './types';
// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (): Hero => {
  return useUserStore();
};
