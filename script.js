const localStorageName = (key) => `counter[${key}]`;
Vue.component("counter", {
  template: "#counter",
  props: ["name"],
  data: function () {
    return {
      counter: parseInt(
        window.localStorage.getItem(localStorageName(this.name)) || 0
      ),
    };
  },
  methods: {
    increment: function () {
      this.counter++;
      window.localStorage.setItem(localStorageName(this.name), this.counter);
    },
    decrement: function () {
      if (this.counter === 0) return;
      this.counter--;
      window.localStorage.setItem(localStorageName(this.name), this.counter);
    },
  },
});
const app = new Vue({ el: "#app" });
