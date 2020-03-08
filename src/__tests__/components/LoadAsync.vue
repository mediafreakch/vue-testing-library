<template>
  <div>
    <Async />
    <HelloWorld />
  </div>
</template>

<script>
export default {
  components: {
    // eslint-disable-next-line
    Async: () => import('./Async.vue'),
    HelloWorld: () => import('./HelloWorld.vue'),
  },
}
</script>
