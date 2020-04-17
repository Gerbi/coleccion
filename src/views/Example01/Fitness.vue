<template>
  <!-- eslint-disable max-len -->
  <div class="bg-gray-400">
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32"
        style="min-height: 90vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{ backgroundImage: `url(${img})` }"
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-gray-900 opacity-75"
          ></span>
        </div>
        <div class="container relative mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-6/12">
              <div class="pr-12">
                <h1 class="text-3xl sm:text-6xl font-semibold text-white uppercase">
                  make your body
                </h1>
                <h1 class="text-3xl sm:text-6xl font-semibold text-orange-500 uppercase">
                  beautiful
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, qui quos reiciendis sint soluta temporibus unde.</span>
                </p>
                <button class="px-4 py-2 mt-16 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  End background    -->
      <section class="-mt-48">
        <form-component></form-component>
      </section>
      <!--   end form   -->
      <section class="my-36">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center mt-20">
            <div class="w-full mb-10 lg:mb-0 md:w-5/12">
              <h3 class="mb-2 text-4xl font-bold leading-normal uppercase">
                welcome to
                <span class="text-orange-500">fitness</span>
              </h3>
              <p
                class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam ducimus hic illum, in itaque numquam! Architecto doloremque odio possimus vel voluptate voluptatum. Exercitationem, quae.
              </p>
              <p
                class="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda corporis culpa ea earum enim excepturi id magni nemo nisi placeat provident, quaerat quam, quasi, quia quisquam rem repellat?
              </p>
              <div class="text-center md:text-left">
                <button class="px-4 py-2 mt-8 text-lg font-semibold text-white uppercase bg-orange-500">get it touch</button>
              </div>
            </div>
            <div class="w-full px-4 mx-auto md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white"
              >
                <img
                  alt="..."
                  src="../../assets/img/2.png"
                  class="w-full align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--      end welcome 1-->
      <section class="py-16 bg-gray-200">
        <div class="container px-4 mx-auto">
          <h3 class="mb-2 text-4xl font-bold leading-normal uppercase">
            welcome to
            <span class="text-orange-500">fitness</span>
          </h3>
          <p
            class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam ducimus hic illum, in itaque numquam! Architecto doloremque odio possimus vel.
          </p>
          <div class="flex flex-wrap pt-10">
            <div class="w-full px-4 ml-auto mr-auto md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-gray-400 rounded-sm"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="w-full align-middle rounded-t-sm opacity-75"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-xl font-bold text-black">
                    Basic Crossfit
                  </h4>
                  <p class="mt-2 leading-relaxed text-gray-800 text-md">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will.</p>
                  <button class="px-4 py-2 mt-6 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
                </blockquote>
              </div>
            </div>
            <div class="w-full px-4 ml-auto mr-auto md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-gray-400 rounded-sm"
              >
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  class="w-full align-middle rounded-t-sm opacity-75"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-xl font-bold text-black">
                    Fitness Studio
                  </h4>
                  <p class="mt-2 leading-relaxed text-gray-800 text-md">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will.</p>
                  <button class="px-4 py-2 mt-6 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
                </blockquote>
              </div>
            </div>
            <div class="w-full px-4 ml-auto mr-auto md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-gray-400 rounded-sm"
              >
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/1882000/pexels-photo-1882000.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  class="w-full align-middle rounded-t-sm opacity-75"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-xl font-bold text-black">
                    Yoga Classes
                  </h4>
                  <p class="mt-2 leading-relaxed text-gray-800 text-md">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every,
                    continue whatever happens.
                  </p>
                  <button class="px-4 py-2 mt-6 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="w-full h-full bg-center bg-cover"
          :style="{ backgroundImage: `url(${trainer})` }"
        >
          <div class="flex flex-col items-center justify-center h-full" style="min-height: 600px;">
            <p class="text-2xl sm:text-5xl font-medium text-center text-white uppercase">we trained with</p>
            <p class="text-3xl sm:text-6xl font-bold text-center text-white uppercase">personal trainer</p>
            <button class="px-4 py-2 mt-16 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
          </div>
        </div>
      </section>
      <!--      end trainer personal-->
      <section class="py-16 bg-gray-200">
        <div class="container px-4 mx-auto">
          <h3 class="mb-2 text-4xl font-bold leading-normal uppercase">
            expert
            <span class="text-orange-500">trainers</span>
          </h3>
          <p
            class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam ducimus hic illum, in itaque numquam! Architecto dolor.
          </p>
          <div class="flex flex-wrap pt-12">
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-64 h-64 p-3 mb-5"
                  >
                    <img src="https://www.trainerize.com/_images/Trainer.png" alt="">
                  </div>
                  <h6 class="text-xl font-semibold">Mike Thom</h6>
                  <h5 class="font-semibold text-orange-500 uppercase text-md">spinning trainer</h5>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-64 h-64 p-3 mb-5"
                  >
                    <img src="https://www.trainerize.com/_images/Trainer.png" alt="">
                  </div>
                  <h6 class="text-xl font-semibold">Mike Thom</h6>
                  <h5 class="font-semibold text-orange-500 uppercase text-md">spinning trainer</h5>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-64 h-64 p-3 mb-5"
                  >
                    <img src="https://www.trainerize.com/_images/Trainer.png" alt="">
                  </div>
                  <h6 class="text-xl font-semibold">Mike Thom</h6>
                  <h5 class="font-semibold text-orange-500 uppercase text-md">spinning trainer</h5>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--      end expert trainer-->
      <section class="flex flex-wrap">
        <div
          class="w-full lg:w-1/2 h-full bg-center bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"
        >
          <span
            class="absolute w-full bg-black opacity-25"
          ></span>
          <div class="flex flex-col items-center justify-center h-full" style="min-height: 600px;">
            <p class="text-3xl sm:text-5xl font-medium text-center text-white uppercase">we trained with</p>
            <p class="text-4xl sm:text-6xl font-bold text-center text-white uppercase">free 5 days pass</p>
            <button class="px-4 py-2 mt-16 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
          </div>
        </div>
        <div
          class="w-full h-full lg:w-1/2 bg-center bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1274&q=80')"
        >
          <span
            class="absolute w-full bg-black opacity-25"
          ></span>
          <div class="flex flex-col items-center justify-center h-full" style="min-height: 600px;">
            <p class="text-5xl font-medium text-center text-white uppercase">call us and tru</p>
            <p class="text-6xl font-bold text-center text-white uppercase">957 547 5625</p>
            <button class="px-4 py-2 mt-16 text-sm font-semibold text-white uppercase bg-orange-500">get it touch</button>
          </div>
        </div>
      </section>
      <!--      end offert-->
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from '../../components/Fitness/Navbar.vue';
import FooterComponent from '../../components/Fitness/Footer.vue';
import FormComponent from '../../components/Fitness/Form.vue';

export default {
  name: 'landing-page',
  components: {
    NavbarComponent,
    FooterComponent,
    FormComponent,
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      img: require('../../assets/img/1.jpg'),
      // eslint-disable-next-line global-require
      imgs: require('../../assets/img/1.jpg'),
      // eslint-disable-next-line global-require
      trainer: require('../../assets/img/personal_traiiner.webp'),
    };
  },
};
</script>
