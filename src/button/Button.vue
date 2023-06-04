<template>
  <button class="b-btn" :class="'b-btn-' + type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["primary", "ghost", "dashed", "link", "text", "default"].includes(value);
      },
    },
  },
};
</script>

<style>
.b-btn {
  font-size: 14px;
  height: 32px px;
  padding: 4px 15px;
  border-radius: 2px;

  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.88);
}
.b-btn-default {
  background-color: #fff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}
.b-btn-default:not(:disabled):hover {
  color: #4096ff;
  border-color: #4096ff;
}
.b-btn-primary {
  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}
.b-btn-primary:not(:disabled):hover {
  color: #fff;
  background-color: #4096ff;
}
</style>
