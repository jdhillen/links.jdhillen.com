<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <section class="container">
      <div class="row">
        <div class="twelve columns">
          <HeaderImage/>
          <HeaderCopy/>
          <SocialIcons/>
        </div>
      </div>
      <router-view />
    </section>
  </main>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { useDefaultStore } from '@/store/DefaultStore';
import HeaderImage from './components/HeaderImage.vue';
import HeaderCopy from './components/HeaderCopy.vue';
import SocialIcons from './components/SocialIcons.vue';

const store = useDefaultStore();
store.fetchContact();
store.fetchSocial();
store.fetchLinks();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
</style>
