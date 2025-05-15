<!--|== Template =============================================================================== -->
<template>
  <section>
    <a
      class="button box-shadow"
      :href="store.getWebsite"
      target="_blank"
      >🌐 Website</a
    >
    <a
      class="button box-shadow"
      :href="store.getScheduler"
      target="_blank"
      >💬 Grab a Time to Talk</a
    >
    <a
      class="button box-shadow"
      v-for="(item, index) in store.links"
      :key="index"
      :href="item.url"
      target="_blank"
      >{{ item.name }}</a
    >
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { useDefaultStore } from '@/store/DefaultStore';

  const store = useDefaultStore();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  section {
    margin-bottom: 50px;
  }

  .button {
    font-family: 'Mundial', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.125rem;
  }
</style>
