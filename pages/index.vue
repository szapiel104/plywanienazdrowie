<template>
  <div class="container">
    <div class="row my-5 d-flex justify">
      <div class="col-12 col-md-6 my-auto">
        <h1>Pływanie na zdrowie</h1>
        <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla leo eu sapien aliquam, hendrerit facilisis libero pretium.</p>
        <div class="row">
          <div class="col-12 col-md-4">
            <b-button size="sm" class="my-2 a-link-btn normal" type="primary" variant="primary" to="/harmonogram">
              <span class="mr-1">Harmonogram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </b-button>
          </div>
          <div class="col-12 col-md-4">
            <b-button size="sm" class="my-2 a-link-btn white" type="primary" variant="primary" to="/kontakt">
              <span class="mr-1">Kontakt</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </b-button>
          </div>
        </div>

      </div>
      <div class="col-12 col-md-6">
        <img src="~assets/img/erik-dungan-lNUi7W4iwok-unsplash.jpg" alt="" class="img-fluid" style="border-radius: 10px">
      </div>
    </div>
    <p class="my-5">W trakcie pracy ... </p>
    <p class="my-5">W trakcie pracy ... </p>
    <p class="my-5">W trakcie pracy ... </p>
    <p class="my-5">W trakcie pracy ... </p>
    <p class="my-5">W trakcie pracy ... </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Pływanie na zdrowie',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Pływanie na zdrowie'
        }
      ],
    }
  }
}
</script>
