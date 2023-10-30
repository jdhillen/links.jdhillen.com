<!--|== Template =============================================================================== -->
<template>
  <ul id="icons" v-if="store.social">
    <li v-for="item in store.social">
      <a
        :href="item.url"
        target="_blank"
        :alt="item.name"
        class="icon icon__social"
        :class="['icon__' + item.icon]"
      ></a>
    </li>
    <li v-if="store.contact">
      <a
        :href="'mailto:' + store.getEmail + '?subject=Hello'"
        class="icon icon__social icon__email"
      ></a>
    </li>
  </ul>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';
import { gsap } from 'gsap';

const store = useDefaultStore();

const animateIn = () => {
  let targets = document.getElementById("icons").children;

  gsap.from(targets, {
    delay: 2,
    duration: 0.25,
    autoAlpha: 0,
    scale: 0,
    ease: "back.out(5)",
    stagger: 0.1,
  });
}

onMounted(() => {
  animateIn();
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
ul {
  margin: 0 auto 35px auto;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    margin: 10px;

    @media screen and (max-width: 400px) {
      margin: 10px 20px;
    }

    a {
      color: white(0.75);
      transition: 300ms color;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
