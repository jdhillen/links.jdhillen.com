<!--|== Template =============================================================================== -->
<template>
  <div class="headerImage" :style="bgImage"/>
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
  max-width: 200px;
  max-height: 200px;
  border: 1px solid $white;
  border-radius: 50%;
  margin: 25px auto;
  background-color: $black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>