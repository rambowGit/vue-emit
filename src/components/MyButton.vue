<template>
	<p-Button label="Load posts" class="p-button-raised p-button-lg" icon="pi pi-check" />
</template>
<script>
export default {
	name: "my-button",
};
</script>
<style scoped>
.btn {
  width: 200px;
  height: 100px;
  border: solid 1px rgb(102, 88, 116);
  background-color: rgb(168, 142, 194);
  border-radius: 4px;
  color: rgb(29, 26, 26 0.5);
  font-size: 26px;
  font-weight: 400;
}
.btn:hover {
  background-color: rgb(163, 116, 211);
}
.btn:active {
  transform: translateY(2px);
}
</style>
