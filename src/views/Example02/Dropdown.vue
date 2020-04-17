<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
        <button @click="toggle" type="button" class=" flex focus:outline-none" @focus="buttonHasFocused = true" @blur="buttonHasFocused = false">
            <slot name="trigger" :hasFocus="buttonHasFocused" :isOpen="isOpen"></slot>
        </button>
        <div :class="[isOpen ? 'block': 'hidden']">
            <button @click="isOpen = false" type="button" class="z-30 block fixed inset-0 w-full h-full cursor-default"></button>
            <div class="absolute z-50 -mt-12 right-0">
                <slot name="dropdown"></slot>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      buttonHasFocused: false,
      isOpen: false,
    };
  },
  mounted() {
    const onEscape = (e) => {
      if (!this.isOpen || e.key !== 'Escape') {
        return;
      }
      console.log('closing');
      this.isOpen = false;
    };
    document.addEventListener('keydown', onEscape);
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape);
    });
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};

</script>

<style scoped>

</style>
