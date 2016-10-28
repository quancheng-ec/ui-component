import Vue from "vue";
import Demo from "./DemoApp";

const DemoApp = Vue.extend(Demo);

new DemoApp({
  el: "#example"
});

