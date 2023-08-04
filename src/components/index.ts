import { App } from 'vue';
import Chart from './chart/index.vue';

// Manually introduce ECharts modules to reduce packing size

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart);
  },
};
