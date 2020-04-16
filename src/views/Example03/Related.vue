<template>
  <!-- eslint-disable max-len -->
  <main class="mb-4 sm:mb-6 px-4">
    <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-white rounded-md shadow">
        <div class="px-4 pt-5 pb-3 bg-white sm:px-6">
          <h3 class="text-lg font-semibold leading-6 text-gray-900">
            Related Articles
          </h3>
        </div>
        <ul>
          <li class="border-t border-gray-200">
            <a href="#"
               class="block transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex items-center flex-1 min-w-0">
                  <div class="flex-1 min-w-0 pr-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div class="font-medium leading-5 text-indigo-700 truncate text-md">Boeing:
                        Neue Sicherheitsmängel bei der 737 Max
                      </div>
                      <div class="flex items-center mt-2 text-sm leading-5 text-gray-600">
                        <time datetime="04-15-2019:00-00">April 15, 2020</time>
                        <span class="ml-1 truncate">By Kristen Ramos</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <img class="w-12 h-12 rounded-lg"
                       src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                       alt="">
                </div>
              </div>
            </a>
          </li>
          <li class="border-t border-gray-200">
            <a href="#"
               class="block transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex items-center flex-1 min-w-0">
                  <div class="flex-1 min-w-0 pr-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div class="font-medium leading-5 text-indigo-700 truncate text-md"># MeToo
                        debate: India's women break their long silence
                      </div>
                      <div class="flex items-center mt-2 text-sm leading-5 text-gray-600">
                        <time datetime="04-15-2019:00-00">April 15, 2020</time>
                        <span class="ml-1 truncate">By Ted Fox</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <img class="w-12 h-12 rounded-lg"
                       src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                       alt="">
                </div>
              </div>
            </a>
          </li>
          <li class="border-t border-gray-200">
            <a href="#"
               class="block transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex items-center flex-1 min-w-0">
                  <div class="flex-1 min-w-0 pr-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div class="font-medium leading-5 text-indigo-700 truncate text-md">Referendum
                        in der Türkei: Offizielles Endergebnis bestätigt knappen Sieg für Erdogan
                      </div>
                      <div class="flex items-center mt-2 text-sm leading-5 text-gray-600">
                        <time datetime="04-15-2019:00-00">April 15, 2020</time>
                        <span class="ml-1 truncate">By Ricardo Cooper</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <img class="w-12 h-12 rounded-lg"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                       alt="">
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div
          class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
          <div class="hidden sm:block">
            <p class="text-sm leading-5 text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">3</span>
              of
              <span class="font-medium">10</span>
              results
            </p>
          </div>
          <div class="flex justify-between flex-1 sm:justify-end">
            <a href="#"
               class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700">
              Previous
            </a>
            <a href="#"
               class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700">
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Related',
};
</script>
