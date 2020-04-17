<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-col h-screen bg-gray-200 lg:px-10 xl:px-20 mx-auto">
    <div
      class="flex lg:hidden justify-between w-full bg-blue-500 py-2 px-4 lg:w-auto lg:justify-start"
    >
      <a href="/" class="mr-8 text-2xl font-bold uppercase">
        <span class="text-white">Example 02</span>
      </a>
      <button
        class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
        type="button"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 text-white w-6">
          <path
            d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z"></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="flex flex-1 bg-gray-200">
        <TrTable />
        <SectionRight />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import SectionRight from './SectionRight.vue';
import TrTable from './TrTable.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
    SectionRight,
    TrTable,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
