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
