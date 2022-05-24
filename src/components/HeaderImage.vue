<!--|== Template =============================================================================== -->
<template>
  <div class="headerImage__wrapper">
    <div class="headerImage boxShadow" :style="bgImage"/>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { computed } from "vue";
import { useDefaultStore } from '@/store/DefaultStore';

const store = useDefaultStore();

const bgImage = computed(() => {
  return `background-image: url('${store.getPhoto}')`
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.headerImage {
  width: 100%;
  height: 100%;
  border: 1px solid $white;
  border-radius: 50%;
  background-color: $black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__wrapper {
    width: 200px;
    height: 200px;
    margin: 25px auto;

    @media screen and (max-width: 280px) {
      width: 100px;
      height: 100px;
    }
  }
}
</style>