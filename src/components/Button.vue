<template>
  <a class="button">
    <slot>{{text}}</slot>
  </a>
</template>

<script type="text/babel">
  import classNames from "classnames"

  export default {
    props: {
      type: {
        type: String,
        default: "normal"
      },
      text: {
        type: String,
        default: "Button"
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .button {
    padding: 5px 10px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
  }

  .button.normal {
    border-color: #000;
  }

  .button.danger {
    border-color: red;
  }
</style>

