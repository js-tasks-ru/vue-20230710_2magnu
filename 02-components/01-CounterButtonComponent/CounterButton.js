import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  template: `<button type="button" @click="increment">{{ count }}</button>`,

  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },

  methods: {
    increment() {
      this.$emit('update:count', this.count + 1);
    },
  },
});
