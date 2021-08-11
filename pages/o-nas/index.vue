<template>
  <div class="container my-5">
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
