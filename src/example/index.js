import Vue from "vue";
import Demo from "./Demo";

const DemoApp = Vue.extend(Demo);

new DemoApp().$mount(document.getElementById("example"))

