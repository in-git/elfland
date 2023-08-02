import { Ref, ref } from 'vue';
import { GameStage } from './types';

export const currentStage = ref<GameStage>({
  name: '野外',
  router: '',
});
export default {};
