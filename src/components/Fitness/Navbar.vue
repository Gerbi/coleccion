<template>
  <!-- eslint-disable max-len -->
  <nav
    class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a href="/" class="mr-8 text-2xl font-bold uppercase">
          <span class="text-white">Fitne</span>
          <span class="text-orange-600">ss</span>
        </a>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 text-white w-6">
            <path
              d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z"></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center rounded-md px-4 flex-grow bg-white lg:flex lg:bg-transparent shadow-xl lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col mr-auto list-none lg:flex-row">
          <li class="flex items-center mt-2">
            <router-link class="mx-3 text-sm py-4 lg:py-2 w-full font-semibold text-gray-800 uppercase lg:text-white hover:text-orange-600" to="/">Home</router-link>
          </li>
          <li class="flex items-center">
            <router-link class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 uppercase lg:text-white hover:text-orange-600 w-full" to="/">About us</router-link>
          </li>
          <li class="flex items-center">
            <router-link class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 uppercase lg:text-white hover:text-orange-600 w-full" to="/">Page</router-link>
          </li>
          <li class="flex items-center">
            <router-link class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 uppercase lg:text-white hover:text-orange-600 w-full" to="/">Blog</router-link>
          </li>
          <li class="flex items-center">
            <a class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 uppercase lg:text-white hover:text-orange-600 w-full" href="#">contacts</a>
          </li>
        </ul>
        <ul class="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <a class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 w-full lg:text-white uppercase hover:text-orange-600" href="#">Login</a>
          </li>
          <li class="flex items-center">
            <a class="mx-3 text-sm py-4 lg:py-2 font-semibold text-gray-800 w-full lg:text-white uppercase hover:text-orange-600" href="#">Sing up</a>
          </li>
          <li class="flex items-center justify-center mb-5 mt-1 lg:my-0">
            <router-link to="/" class="px-3 py-2 text-sm font-semibold text-gray-800 lg:text-white hover:bg-orange-600 hover:text-white rounded-sm uppercase border-2 border-orange-600">choose plan</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
