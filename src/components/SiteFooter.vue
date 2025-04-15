<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <div class="footer__copyright--txt">
              Made with
              <a
                href="https://vuejs.org/"
                target="_blank"
              >
                <div class="icon icon__vue"/>
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
      padding: 25px 0;
      text-align: center;

      &--txt {
        font-family: 'Open Sans Regular', sans-serif;
        font-size: 10px;
        color: $white;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
  }
</style>
