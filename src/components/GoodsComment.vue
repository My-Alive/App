<template>
  <div>
    <pinglun :id="$route.params.id"></pinglun>
  </div>
</template>

<script>
import pinglun from "./pinglun.vue";
export default {
  components: {
    pinglun
  }
};
</script>
<style lang="scss" scoped>
</style>

