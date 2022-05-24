<!--|== Template =============================================================================== -->
<template>
  <div class="headerImage boxShadow" :style="bgImage"/>
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
  width: 200px;
  height: 200px;
  margin: 25px auto;
  border: 1px solid $white;
  border-radius: 50%;
  background-color: $black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 280px) {
      width: 100px;
      height: 100px;
    }
}
</style>