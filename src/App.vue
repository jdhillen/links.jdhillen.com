<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <section class="page container">
      <div class="row">
        <div class="twelve columns">
          <HeaderImage />
          <HeaderCopy />
          <SocialIcons />
        </div>
      </div>
      <router-view />
    </section>
    <SiteFooter />
  </main>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { useDefaultStore } from '@/store/DefaultStore';
  import HeaderImage from './components/HeaderImage.vue';
  import HeaderCopy from './components/HeaderCopy.vue';
  import SocialIcons from './components/SocialIcons.vue';
  import SiteFooter from './components/SiteFooter.vue';

  const store = useDefaultStore();
  store.fetchContact();
  store.fetchSocial();
  store.fetchLinks();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .app {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
  }
</style>
