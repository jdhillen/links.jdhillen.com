<!--|== Template =============================================================================== -->
<template>
  <ul v-if="store.social">
    <li v-for="item in store.social">
      <a
        :href="item.url"
        target="_blank"
        :alt="item.name"
        class="icon icon__social"
        :class="['icon__' + item.icon]"
      ></a>
    </li>
    <li v-if="store.contact">
      <a
        :href="'mailto:' + store.getEmail + '?subject=Hello'"
        class="icon icon__social icon__email"
      ></a>
    </li>
  </ul>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { useDefaultStore } from '@/store/DefaultStore';

  const store = useDefaultStore();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto 35px;
    list-style-type: none;

    li {
      display: flex;
      margin: 10px;

      @media screen and (width <= 400px) {
        margin: 10px 20px;
      }

      a {
        color: rgba(255, 255, 255, 0.75);
        transition: 300ms color;

        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
