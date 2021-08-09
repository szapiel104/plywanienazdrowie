<template>
  <div class="container mt-4">
    <h1>Kontakt</h1>
  <Lorem />
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
      title: 'Kontakt - Pływanie na zdrowie',
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
