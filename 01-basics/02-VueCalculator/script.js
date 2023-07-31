import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
  data() {
    return {
      firstOperand: 0,
      secondOperand: 0,
      selectedOperator: null,
    }
  },

  computed: {
    result() {
      switch (this.selectedOperator) {
        case "sum":
          return this.sum(this.firstOperand, this.secondOperand);
        case "subtract":
          return this.subtract(this.firstOperand, this.secondOperand);
        case "multiply":
          return this.multiply(this.firstOperand, this.secondOperand);
        case "divide":
          return this.divide(this.firstOperand, this.secondOperand);
        default:
          return 0;
      }
    }
  },

  methods: {
    sum(a, b) { return a + b },
    subtract(a, b) { return a - b },
    multiply(a, b) { return a * b },
    divide(a, b) { return a / b },
  },

}).mount('#app');
