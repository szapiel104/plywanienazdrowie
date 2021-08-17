<template>
  <div class="container mt-4">
    <iframe src="https://calendar.google.com/calendar/embed?src=eijv0hh4gkr8oi1bspr1qrduug%40group.calendar.google.com&ctz=Europe%2FWarsaw" style="border: 0" width="100%" height="800" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Harmonogram - Pływanie na zdrowie',
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
