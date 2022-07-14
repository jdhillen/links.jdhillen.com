<!--|== Template =============================================================================== -->
<template>
  <h1 class="text-center textShadow">{{ store.getName }}</h1>
  <p class="text-center textShadow">{{ store.getTitle }}</p>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { useDefaultStore } from '@/store/DefaultStore';

const store = useDefaultStore();
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
