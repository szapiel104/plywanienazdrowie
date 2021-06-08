<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Łódzkie Alpaki
      </h1>
      <h3 class="subtitle">
        Strona w budowie!
      </h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media (max-width: 992px){
  .title{
    font-size: 50px;
  }
  .subtitle{
    font-size: 20px;
  }
}
@media(min-width: 993px){
  .title{
    font-size: 100px;
  }
  .subtitle{
    font-size: 42px;
  }
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
