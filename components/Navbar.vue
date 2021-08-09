<template>
  <div class="navbar-pos">
    <b-navbar toggleable="lg" class="navbar-box" fixed="top">
      <div class="container">
      <b-navbar-brand href="#">Pływanie na Zdrowie</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="a-link-menu" to="/">Strona główna</b-nav-item>
          <b-nav-item class="a-link-menu" to="/o-nas">O nas</b-nav-item>
          <b-nav-item class="a-link-menu" to="/kontakt">Kontakt</b-nav-item>
          <b-button size="sm" class="my-2 ml-sm-5 my-sm-0 a-link-btn" type="primary" variant="primary" to="/harmonogram">
            <span class="mr-1">Harmonogram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
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
