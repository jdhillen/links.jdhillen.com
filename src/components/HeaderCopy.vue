<!--|== Template =============================================================================== -->
<template>
  <h1 id="name" class="text-center textShadow">{{ store.getName }}</h1>
  <p id="title" class="text-center textShadow">{{ store.getTitle }}</p>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';
import { gsap } from 'gsap';

const store = useDefaultStore();

const animateIn = () => {
  gsap.from("#name", {
    delay: 1.25,
    duration: 0.5,
    autoAlpha: 0,
    scale: 0.5,
    ease: "back.out(5)",
  });
  gsap.from("#title", {
    delay: 1.5,
    duration: 0.5,
    autoAlpha: 0,
    scale: 0.5,
    ease: "back.out(5)",
  });
}

onMounted(() => {
  animateIn();
});

</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
h1 {
  @extend .mundial;
  @extend .mundial__regular;
  letter-spacing: 0.125rem;
}

p {
  @extend .mundial;
  @extend .mundial__thin;
  letter-spacing: 0.125rem;
}
</style>
