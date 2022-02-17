<template>
  <div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['error'],
  layout: 'error',
  mounted() {
    if (this.error.statusCode === 404)
      this.$router.replace('/profile');
  }
}
</script>
