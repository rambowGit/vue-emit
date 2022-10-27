<template>
  <div class="container">
    <my-button @click="clickHandler" />
  </div>
</template>
<script>
import MyButton from "../components/MyButton.vue";
export default {
  name: "main-page",
  components: {
    MyButton,
  },
  methods: {
    clickHandler() {
      alert("Thanks for click =)");
    },
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(94, 83, 71);
}
</style>
