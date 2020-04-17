<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-col flex-1 w-0 overflow-hidden">
    <div class="relative">
      <div class="flex items-center justify-between hidden px-5 pt-4 pb-2 lg:block">
        <div class="relative block w-full sm:w-64">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-500 fill-current">
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                    </path>
                  </svg>
                </span>
          <input placeholder="Search" class="block w-full py-2 pr-4 text-sm text-gray-600 placeholder-gray-400 bg-white rounded-lg pl-9 focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none">
        </div>
      </div>
      <div class="flex flex-wrap items-center px-5 py-4 pb-4 bg-gray-200 md:justify-between">
        <div class="flex flex-col w-full md:flex-row md:flex-no-wrap md:w-auto">
          <h3 class="text-lg text-gray-900 truncate xl:text-xl">
            Orders
          </h3>
          <div class="flex mt-2 lg:mt-0">
            <div class="md:ml-12">
              <span class="text-sm text-gray-500">Dates</span>
              <p class="text-sm font-bold text-gray-800">10 Jul - 17 Jul</p>
            </div>
            <div class="ml-12">
              <span class="text-sm text-gray-500">Status</span>
              <p class="text-sm font-bold text-gray-800">All</p>
            </div>
            <div class="ml-12">
              <span class="text-sm text-gray-500">Payment</span>
              <p class="text-sm font-bold text-gray-800">All</p>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-4 md:w-auto xl:mt-0">
          <button class="flex justify-center w-1/2 px-2 py-2 mr-2 bg-white rounded-lg">
            <svg class="w-6 h-6 text-gray-500 fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"/>
            </svg>
          </button>
          <button class="flex justify-center w-1/2 px-2 py-2 bg-blue-500 rounded-lg">
            <svg class="w-6 h-6 text-white fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex-1 px-3 overflow-y-auto">
      <div class="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow-xs ">
          <table class="min-w-full leading-normal">
            <thead>
            <tr>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Client / Invoice
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Issued / Due
              </th>
              <th class="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Travellers
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Agent
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Amount
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Status
              </th>
              <th class="px-5 py-3 bg-gray-100 border-b-2 border-gray-200"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(order, i) in orders" :key="i">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <Dropdown class="flex">
                  <template #trigger="{ hasFocus, isOpen }">
                    <div class="flex-shrink-0 w-10 h-10 overflow-hidden border-2 rounded-full"
                          :class="[(hasFocus || isOpen) ? 'border-white xl:border-indigo-500': 'border-gray-600 xl:border-gray-300']">
                      <img class="w-full h-full rounded-full" :src="order.imageUrl" alt="">
                    </div>
                    <div class="ml-3 text-left">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ order.name }}
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">{{ order.country }}</p>
                    </div>
                  </template>
                  <template #dropdown>
                    <div class="w-48 py-2 mt-3 bg-white rounded-lg shadow-xl xl:border">
                      <a href="#support" class="block px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500">
                        <p class="text-sm">Natalie Garret</p>
                        <p class="text-xs">natalie@example.com</p>
                      </a>
                      <a href="#support" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-blue-500">
                        <p class="text-sm">John Doe</p>
                        <p class="text-xs">john@example.com</p>
                      </a>
                      <a href="#sign-out" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-blue-500">
                        <p class="text-sm">Michelle S.</p>
                        <p class="text-xs">michelle@example.com</p>
                      </a>
                    </div>
                  </template>
                </Dropdown>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">{{ order.traveller }}</p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">{{ order.agent }}</p>
                <p class="text-gray-600 whitespace-no-wrap">{{ order.emailAgent }}</p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">$ {{order.price }}</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <span
                :class="{'text-green-700': order.status === 'confirmed', 'text-red-800': order.status === 'cancelled'}"
                class="relative inline-block px-3 py-1 text-gray-800 font-semibold leading-tight">
                <span aria-hidden=""
                      :class="{'bg-green-200': order.status === 'confirmed', 'bg-red-200': order.status === 'cancelled'}"
                      class="absolute inset-0 rounded-full opacity-50 bg-gray-300"></span>
                <span class="relative">{{ order.status }}</span>
              </span>
              </td>
              <td class="px-5 py-5 text-sm text-right bg-white border-b border-gray-200">
                <button type="button" class="inline-block text-gray-500 hover:text-gray-700">
                  <svg class="inline-block w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                  </svg>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'TrTable',
  components: { Dropdown },
  props: ['order'],
  data() {
    return {
      isOpen: false,
      orders: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          traveller: 3,
          baths: 2,
          name: 'Clementina DuBuque',
          price: 190000,
          reviewCount: 34,
          status: 'waiting',
          agent: 'John Doe',
          emailAgent: 'john@example.com',
          country: 'Thailand, Phuket',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          traveller: 4,
          baths: 1,
          name: 'Glenna Reichert',
          price: 175000,
          reviewCount: 12,
          status: 'confirmed',
          agent: 'John Doe',
          emailAgent: 'john@example.com',
          country: 'Thailand, Phuket',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
          traveller: 5,
          baths: 4,
          name: '"Nicholas Runolfsdottir V',
          price: 200000,
          reviewCount: 54,
          status: 'cancelled',
          agent: 'John Doe',
          emailAgent: 'john@example.com',
          country: 'Argentina, Buenos Aires',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1580770308606-5322a422a194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          traveller: 8,
          baths: 2,
          name: 'Leanne Graham',
          price: 115000,
          reviewCount: 34,
          status: 'confirmed',
          agent: 'Hani baladi',
          emailAgent: 'hani@example.com',
          country: 'Colombia, Cartagena',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1585667090374-68ce084008e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          traveller: 3,
          baths: 2,
          name: 'Patricia Lebsack',
          price: 115000,
          reviewCount: 34,
          status: 'waiting',
          agent: 'Sebastian Hages',
          emailAgent: 'sebastian@example.com',
          country: 'Japon, Tokio',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          traveller: 2,
          baths: 2,
          name: 'Ervin Howell',
          price: 15000,
          reviewCount: 34,
          status: 'cancelled',
          agent: 'Theodor Lundqvis',
          emailAgent: 'theodor@example.com',
          country: 'China, Beijin',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1585290031261-74338d371081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          traveller: 3,
          baths: 2,
          name: 'Christian Lue',
          price: 115000,
          reviewCount: 34,
          status: 'confirmed',
          agent: 'John Doe',
          emailAgent: 'john@example.com',
          country: 'Germany, Berlin',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1564665759044-959473395029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          traveller: 5,
          baths: 2,
          name: 'Family home in the suburbs',
          price: 115000,
          reviewCount: 34,
          status: 'cancelled',
          agent: 'John Doe',
          emailAgent: 'john@example.com',
          country: 'Turkey, Ankara',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1572720051467-ff30aaa39ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 ',
          traveller: 3,
          baths: 2,
          name: 'Daniil Vnoutchkov',
          price: 115000,
          reviewCount: 34,
          status: 'waiting',
          agent: 'John Doe',
          emailAgent: 'danii@example.com',
          country: 'Suiza, Berna',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          traveller: 8,
          baths: 2,
          name: 'Oliver Niblett',
          price: 115000,
          reviewCount: 34,
          status: 'cancelled',
          agent: 'John Doe',
          emailAgent: 'ojnibl@example.com',
          country: 'USA, New York',
        },
      ],
    };
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
