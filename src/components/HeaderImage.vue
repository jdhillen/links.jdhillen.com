<!--|== Template =============================================================================== -->
<template>
  <div id="headerImg" class="headerImage">
    <img class="headerImage__img boxShadow" :src="store.getPhoto" alt="Picture of J.D. Hillen"/>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';
import { gsap } from 'gsap';

const store = useDefaultStore();

const animateIn = () => {
  gsap.set("#headerImg", {
    autoAlpha: 0,
    scale: 0.25,
    "--myBlur": 10,
  });
  gsap.to("#headerImg", {
    delay: 1,
    duration: 0.5,
    autoAlpha: 1,
    scale: 1,
    "--myBlur": 0,
    ease: "back.out(1.75)",
  });
}

onMounted(() => {
  animateIn();
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.headerImage {
  width: 200px;
  height: 200px;
  margin: 25px auto;
  filter: blur(var(--myBlur));

  @media screen and (max-width: 280px) {
    width: 100px;
    height: 100px;
  }

  &__img {
    border: 1px solid $white;
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
}
</style>
