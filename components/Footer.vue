<template>
  <div>
    <footer class="footer py-5 bg-light footer-light">
      <div class="container px-5">
        <div class="row gx-5 align-items-center text-center">
          <div class="col-12 small">Copyright © plywanienazdrowie.pl {{currentDate.getFullYear()}}</div>
          <div class="col-12 small">Created by <b>SuroCrave</b></div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>


export default {
  data(){
    return {
      currentDate: new Date,
    }
  }
}
</script>
<style lang="scss">
.navbar-pos{
  height: 80px;
}
.navbar-box{
  .navbar-nav{
    display: flex;
    align-items: center;
  }
  background-color: #fff !important;
  border-bottom: 1px solid #f2f6fc;
  padding: 1.3rem 0;
  .a-link-menu a{
    font-size: 17px;
    font-weight: 500;
    color: rgba(0, 0, 0, .8) !important;
    display: block;
    padding: 0 1rem !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    &:hover{
      color: rgba(0, 0, 0, .6) !important;
    }
  }
  .a-link-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 12px;
    border-radius: 7px;
    &:hover{
      span, svg{
        color: rgba(255, 255, 255, 0.8) !important;
      }
    }
  }
}
</style>
