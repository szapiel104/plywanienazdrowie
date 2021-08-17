<template>
  <div class="container my-5">
    <h3>Miłość do <span style="color: #a9d6d1">Wody</span></h3>
    <hr/>
    <p>
      Jesteśmy rodzinną firmą pomagającą ludziom pokochać wodę, działającą od ponad 20 lat. <br/>Dlaczego rodzinną?
      Powodów
      jest kilka:<br/><br/>
    <div class="about-flex-number">
      <img class="mr-3" src="~assets/svg/1.svg"/>
      <p class="mb-0">
        <b>Halina Chmielecka, pani Halinka - fizjoterapeutka</b>, obecnie prowadząca terapię w wodzie jako pierwsza
        prowadziła
        grupową naukę pływania dla dzieci od lat 3 na pływalni Oceanik w Tuszynie. Tak! Jesteśmy na pływalni Oceanik od
        2005 roku!
        <br/>
        Pasję do pracy w wodzie przekazała swojej córce - Adriannie, która obecnie jest odpowiedzialna za organizację
        zajęć grupowych na tej pływalni.
        <br/>
        Pani Halinka poza tym, że jest fizjoterapeutką jest również terapeutą metody Hallwick ATP, Bad Ragaz Ring Method
        oraz PNF w wodzie. Prowadzi terapię z dziećmi oraz dorosłymi z niepełnosprawnościami.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/2.svg"/>
      <p class="mb-0">
        <b> Ważni są dla nas ludzie!</b>
        Z każdym rodzicem mamy bezpośredni kontakt.<br/> Niejednokrotnie rodzice naszych pływaków
        nauczyli się pływać podczas zajęć swoich dzieci.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/3.svg"/>
      <p class="mb-0">
        <b>Pływają u nas młodsze rodzeństwa dzieci</b>, które już popłynęły w świat. <br/>Działamy tak długo, że wracają do
        nas nasi
        uczniowie ze swoimi dziećmi.
      </p>
    </div>
    <div class="mt-4">
      <p>
        Pracujemy wg autorskiej metody łączącej podstawy metodyki pływnia, elementy terapii oraz podejście pedagogiczne.
        <br class="d-block d-md-none"/>
        <br class="d-block d-md-none"/>
        Prowadzimy zajęcia w wodzie dla niemowląt, dzieci do 3 roku życia, dzieci 4-8 lat i starszych, nastolatków,
        dorosłych, seniorów, dzieci z niepełnosprawnościami oraz zaburzeniami rozwoju.
      </p>
    </div>
  </div>
</template>

<script>
import Lorem from '@/components/Lorem';

export default {
  components: {
    Lorem,
  },
  head() {
    return {
      title: 'O nas - Pływanie na zdrowie',
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

<style>
@media (min-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: end;
  }
}

@media (max-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: center;
  }
}
</style>
