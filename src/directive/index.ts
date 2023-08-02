import { App } from 'vue';
import draggable from './draggable';
import focus from './focus';

export default {
  install(Vue: App) {
    Vue.directive('draggable', draggable);
    Vue.directive('focus', focus);
  },
};
