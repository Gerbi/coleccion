<template>
  <!-- eslint-disable max-len -->
  <div
    class="relative z-10 flex-col flex-grow flex-shrink-0 hidden w-full lg:max-w-xs xl:max-w-sm bg-white border-r lg:flex">
    <div
      class="flex items-center justify-between flex-shrink-0 px-4 py-2 border-b">
      <div class="flex flex-col justify-center w-full block text-center items-center px-6 py-4">
        <img class="object-cover text-center w-32 h-32 bg-center rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1572720051467-ff30aaa39ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
        <div class="items-center text-center content-center mt-4">
          <span class="font-bold text-center">Diving in Bora</span>
          <p class="text-sm text-gray-600">Bora Bora, Indonesia</p>
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div class="pb-6 bg-white shadow">
        <div class="flex justify-between px-6 pt-3 pb-4">
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Date & Time</span>
            <p class="font-semibold text-gray-900 text-md">17 Sep, 2019</p>
            <p class="text-sm text-gray-700">10:20 am</p>
          </label>
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">No clients</span>
            <p class="font-semibold text-gray-900 text-md">2 adults</p>
          </label>
        </div>
        <div class="flex items-center justify-between px-6 pt-2 pb-4">
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Payment</span>
            <p class="font-semibold text-gray-900 text-md">Unpaid</p>
            <p class="text-sm text-gray-700">$520</p>
          </label>
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Status</span>
            <select class="block w-full mt-1 text-gray-500 appearance-none shadow form-select focus:bg-gray-300">
              <option class="outline-none">Up to $2,000/wk</option>
            </select>
          </label>
        </div>
        <div class="flex flex-1 flex-wrap justify-between px-6 pt-3 pb-4">
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Transfer from/to</button>
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Breakfast & lunch</button>
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Equipment</button>
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Three dives</button>
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Instructor</button>
          <button class="px-3 py-1 my-1 mr-1 text-sm text-gray-600 bg-gray-200 rounded-lg" type="button">Underwater photoshoot</button>
        </div>
        <div class="flex justify-between px-6 pt-3 pb-4">
          <div class="flex">
            <div class="">
              <img class="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80">
            </div>
            <div class="ml-2">
                  <span class="text-sm font-bold text-gray-800">
                    Elon Travel
                  </span>
              <p class="text-sm text-gray-700">travelelon@email.com</p>
            </div>
          </div>
          <div class="items-center">
            <button type="button" class="px-2 py-2 leading-none text-sm text-white bg-blue-500 rounded-lg">Message</button>
          </div>
        </div>
        <div class="flex items-center justify-between px-6 pt-3 pb-4">
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Fun Driver</span>
            <p class="font-semibold text-gray-900 text-md">Natalie Port</p>
            <p class="text-sm text-gray-700">ntali@email.com</p>
          </label>
          <div class="flex items-center">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-600">
              <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between px-6 pt-3 pb-4">
          <label class="block px-2">
            <p class="font-semibold text-gray-900 text-md">Paradise Resort & Spa</p>
            <p class="text-sm text-gray-600">Room #233</p>
          </label>
        </div>
        <div class="flex items-center justify-around px-6 pt-3 pb-4">
          <label class="block px-2 sm:w-1/4 lg:w-1/2">
            <p class="font-semibold text-gray-900 text-md">167 sm</p>
            <p class="text-xs font-semibold text-gray-600">Height</p>
          </label>
          <label class="block px-2 sm:w-1/4 lg:w-1/2">
            <p class="font-semibold text-gray-900 text-md">38</p>
            <p class="text-xs font-semibold text-gray-600">Fins Size</p>
          </label>
          <label class="block px-2 sm:w-1/4 lg:w-1/2">
            <p class="font-semibold text-gray-900 text-md">M</p>
            <p class="text-xs font-semibold text-gray-600">Swimsuit</p>
          </label>
        </div>
        <div class="flex items-center justify-between px-6 pt-3 pb-4">
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Dive Master</span>
            <p class="font-semibold text-gray-900 text-md">Lewons Potras</p>
            <p class="text-sm text-gray-700">lewons@email.com</p>
          </label>
          <div class="flex items-center">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-600">
              <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between px-6 pt-3 pb-4">
          <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span class="text-sm font-semibold text-gray-600">Discovered diver</span>
            <p class="font-semibold text-gray-900 text-md">Jane James</p>
            <p class="text-sm text-gray-700">james@email.com</p>
          </label>
          <div class="flex items-center">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-600">
              <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionRight',
};
</script>

<style scoped>

</style>
