<!--|== Template =============================================================================== -->
<template>
  <h1 class="text-center text-shadow">{{ store.getName }}</h1>
  <p class="text-center text-shadow">{{ store.getTitle }}</p>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { useDefaultStore } from '@/store/DefaultStore';

  const store = useDefaultStore();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  h1 {
    font-family: 'Mundial', sans-serif;
    font-weight: 400;
    letter-spacing: 0.125rem;
  }

  p {
    font-family: 'Mundial', sans-serif;
    font-weight: 200;
    letter-spacing: 0.125rem;
  }
</style>
