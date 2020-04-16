<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white top-0 z-40 shadow fixed w-full">
      <div class="w-full pt-1 pb-1 bg-gray-800"></div>
      <div class="bg-gray-800">
        <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <nav class="relative flex flex-wrap items-center justify-between xl:px-10 md:py-4">
            <div class="relative z-10 flex-shrink-0 py-4 pl-4 text-xl font-bold text-white md:p-0">
              Breaking News
            </div>
            <div class="flex-shrink-0 pr-4 md:hidden">
              <button
                ref="openButton"
                @click="open"
                type="button"
                class="block text-white focus:outline-none focus:text-gray-200"
                aria-label="Menu"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                  />
                  <path
                    d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                  />
                  <path
                    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                  />
                </svg>
              </button>
            </div>
            <div
              class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent"
            >
              <div class="relative flex items-baseline ml-10">
                <a href="#" class="text-sm font-medium text-white">Log in</a>
                <a
                  href="#"
                  class="px-3 py-2 ml-8 text-sm font-medium text-center bg-white rounded-sm text-peri hover:bg-text-600 focus:outline-none"
                >Create Account</a
                >
              </div>
            </div>
          </nav>
        </div>
        <div class="md:hidden">
        </div>
        <!-- Off-canvas menu background overlay -->
        <transition
          enter-class="opacity-25"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
          appear
        >
          <div v-show="isOpen" class="fixed inset-0 z-10 transition-opacity">
            <div
              @click="close"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="-1"
            ></div>
          </div>
        </transition>

        <!-- Off-canvas menu -->
        <transition
          enter-class="translate-x-full"
          enter-active-class="ease-out transition-slow"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-active-class="ease-in transition-medium"
          leave-to-class="translate-x-full"
          appear
        >
          <div
            v-show="isOpen"
            class="fixed inset-y-0 right-0 z-10 w-full max-w-xs overflow-y-auto transition-transform bg-white"
          >
            <div class="relative z-10 bg-white">
              <div
                :class="isOpen ? 'block' : 'hidden'"
                class="absolute top-0 right-0 p-4"
              >
                <button
                  ref="closeButton"
                  @click="close"
                  type="button"
                  class="text-gray-600 focus:outline-none focus:text-gray-900"
                  aria-label="Close"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-4 pt-4 pb-6">
                <a href="#">News</a>
                <a
                  href="#"
                  class="block mt-8 text-xs font-semibold tracking-wider text-gray-600 uppercase"
                >Sections</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >Political</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >Economy</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >Sport</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >Network</a
                >
              </div>
              <div class="px-4 pt-6 border-t-2 border-gray-200">
                <a
                  href="#"
                  class="block font-medium text-gray-900 hover:text-peri"
                >RSS-Feed</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >Newsletter</a
                >
                <a
                  href="#"
                  class="block mt-4 font-medium text-gray-900 hover:text-peri"
                >About</a
                >
              </div>
            </div>
            <div class="relative bg-white">
              <div class="px-4 pt-4 pb-6">
                <a
                  href="#"
                  class="block font-medium text-gray-900 hover:text-peri"
                >Log in</a
                >
              </div>
              <div class="p-4">
                <a
                  href="#"
                  class="block px-3 py-3 font-medium text-center text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >Create Account</a
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="max-w-6xl mx-auto px-2 py-4 sm:px-4 md:px-6 lg:px-8">
        <ul class="flex items-center justify-around mx-auto -mx-2 lg:hidden">
          <li class="">
            <a href="/news">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </a>
          </li>
          <li class="">
            <a href="/msg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
            </a>
          </li>
          <li class="">
            <a href="/msg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </a>
          </li>
          <li class="">
            <a href="/msg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
              </svg>
            </a>
          </li>
          <li class="">
            <a href="/msg">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div class="relative flex items-center justify-between mt-4 xl:px-10 xl:mt-0">
          <div class="flex">
            <button
              ref="openButton"
              @click="open"
              type="button"
              class="hidden mr-4 text-gray-600 md:block focus:outline-none focus:text-gray-200"
              aria-label="Menu"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                />
                <path
                  d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                />
                <path
                  d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                />
              </svg>
            </button>
            <a
              href="#"
              class="flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
            >Politics
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 ml-1"><path d="M9 5l7 7-7 7"></path></svg></a
            >
            <a
              href="#"
              class="flex items-center ml-4 text-sm font-medium text-gray-900 hover:text-gray-700"
            >Economy
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 ml-1"><path d="M9 5l7 7-7 7"></path></svg></a
            >
            <a
              href="#"
              class="flex items-center ml-4 text-sm font-medium text-gray-900 hover:text-gray-700"
            >Sports
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 ml-1"><path d="M9 5l7 7-7 7"></path></svg></a
            >
            <a
              href="#"
              class="flex items-center ml-4 text-sm font-medium text-gray-900 hover:text-gray-700"
            >Network
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 ml-1"><path d="M9 5l7 7-7 7"></path></svg></a
            >
          </div>
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-7 h-7 text-gray-700 hidden md:block">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.closeButton.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.$nextTick(() => {
        this.$refs.openButton.focus();
      });
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          document.body.style.setProperty('overflow', 'hidden');
        } else {
          document.body.style.removeProperty('overflow');
        }
      },
    },
  },
};
</script>
