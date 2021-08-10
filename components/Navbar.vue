<template>
  <div class="navbar-pos">
    <b-navbar toggleable="lg" class="navbar-box px-3 px-lg-0" fixed="top">
      <div class="container">
        <b-navbar-brand to="/">
          <img class="logo-navbar" src="~assets/img/logo-bez-tla.png"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="a-link-menu" to="/">Strona główna</b-nav-item>
            <b-nav-item class="a-link-menu" to="/o-nas">O nas</b-nav-item>
            <b-nav-item class="a-link-menu" to="/kontakt">Kontakt</b-nav-item>
            <b-button size="sm" class="my-5 my-lg-2 ml-lg-5 a-link-btn normal" type="primary" variant="primary"
                      to="/harmonogram">
              <span class="mr-1">Harmonogram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                   class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<style lang="scss">
.logo-navbar {
  max-width: 120px;
  position: absolute;
  top: -15px;
}

.navbar-pos {
  height: 80px;
}

.navbar-box {
  @media(min-width: 992px) {
    .navbar-nav {
      display: flex;
      align-items: center;
    }
  }
  background-color: #fff !important;
  border-bottom: 1px solid #f2f6fc;
  padding: 1.3rem 0;

  .a-link-menu a {
    font-size: 17px;
    @media(min-width: 992px) {
      font-weight: 500;
    }
    @media(max-width: 992px) {
      font-weight: 400;
      padding: 0 !important;
      line-height: 45px;
    }
    color: rgba(0, 0, 0, .8);

    &:hover {
      color: #a9d6d1 !important;
    }

    display: block;
    padding: 0 1rem !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }

  .nuxt-link-exact-active {
    color: rgb(60, 154, 144) !important;
  }
}

@media(max-width: 992px) {
  #nav-collapse {
    position: absolute;
    width: 100%;
    top: 100px;
    background: white;
    left: 0px;
    padding: 0 20px;
    border-bottom: 2px solid #a9d6d1;
  }
}
</style>
