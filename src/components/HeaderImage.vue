<!--|== Template =============================================================================== -->
<template>
  <div
    class="header-image box-shadow"
    :style="bgImage"
  />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { computed } from 'vue';
  import { useDefaultStore } from '@/store/DefaultStore';

  const store = useDefaultStore();

  const bgImage = computed(() => {
    return `background-image: url('${store.getPhoto}')`;
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .header-image {
    width: 200px;
    height: 200px;
    margin: 25px auto;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px solid #fff;
    border-radius: 50%;

    @media screen and (width <= 280px) {
      width: 100px;
      height: 100px;
    }
  }
</style>
