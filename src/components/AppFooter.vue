<template>
  <footer class='footer'>
    <div class='container'>
      <div class='footer__content'>
        <div class='footer__copy'>
          Copyright EZSoftware. All Rights Reserved.
        </div>
        <ul class='footer__nav'>
          <li class='footer__nav-item'>
            <a href='#' class="footer__link">Imprint</a>
          </li>
          <li class='footer__nav-item'>
            <a href='#' class="footer__link">Terms</a>
          </li>
          <li class='footer__nav-item'>
            <a href='#' class="footer__link">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.footer__content {
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(55, 57, 60, 0.2);
}

.footer__copy {
  width: 100%;
  color: #BFBFC5;
  text-align: center;
  order: 2;
}

.footer__nav {
  margin: 0 0 20px;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  order:1;
}

.footer__nav-item:not(:last-child) {
  margin-right: 40px;
}

.footer__link {
  text-decoration: none;
  color: #F03360;
}

@media screen and (min-width: 600px) {
  .footer__content {
    padding: 40px 0 75px;
    justify-content: space-between;
  }

  .footer__copy {
    width: auto;
    order: 1;
  }

  .footer__nav {
    width: auto;
    margin: 0;
    order: 2;
  }
}

</style>