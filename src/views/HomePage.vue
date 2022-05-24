<!--|== Template =============================================================================== -->
<template>
  <section>
    <a class="button boxShadow" :href="store.getWebsite" target="_blank">Website</a>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { useDefaultStore } from '@/store/DefaultStore';

const store = useDefaultStore();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
</style>
