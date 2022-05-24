<!--|== Template =============================================================================== -->
<template>
  <section>
    <a class="button boxShadow" :href="store.getWebsite" target="_blank">Website</a>
    <a class="button boxShadow" v-for="(item, index) in store.links" :key="index" :href="item.url" target="_blank">{{item.name}}</a>
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
