<template>
  <!-- eslint-disable max-len -->
  <main class="flex items-center justify-center min-h-screen antialiased leading-relaxed">
    <ul class="flex flex-col">
      <li>
        <router-link to="/fitness">Example 01</router-link>
      </li>
      <li>
        <router-link to="/example02">Example 02</router-link>
      </li>
      <li>
        <router-link to="/example03">Example 03</router-link>
      </li>
    </ul>
  </main>
</template>
<script>

export default {
  name: 'landing-page',
  data() {
    return {
      // eslint-disable-next-line global-require
      img: require('../assets/img/1.jpg'),
      // eslint-disable-next-line global-require
      imgs: require('../assets/img/1.jpg'),
      // eslint-disable-next-line global-require
      trainer: require('../assets/img/personal_traiiner.webp'),
    };
  },
};
</script>
