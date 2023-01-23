<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <div class="footer__copyright--txt">
              Made with
              <a href="https://vuejs.org/" target="_blank">
                <div class="icon icon__vue"></div>
              </a>
              by J.D. Hillen
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.footer {
  width: 100%;
  text-align: center;

  &__copyright {
    text-align: center;
    padding: 25px 0;

    &--txt {
      font-family: 'Open Sans Regular';
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $white;
    }
  }
}
</style>
