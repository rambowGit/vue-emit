<template>
  <div class="container">	
		<div v-if="posts.items" class="posts">			
			<p-DataTable :value="posts.items">
				<p-Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.id"></p-Column>
			</p-DataTable>
		</div>

		<div v-else>
			<p v-if="posts.loading">Loading...</p>
			<p v-if="!posts.loading">There is no posts yet</p>
		</div>		
		<div v-if="!posts.items">
			<my-button @click="clickHandler" />	
		</div>

		<p-Toast />


  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "main-page",
	components: {
		MyButton,
	},
	computed: {
		...mapGetters({
			posts: "postsModule/getPosts"
		})
	},
	methods: {		
		...mapActions({
			loadPosts: "postsModule/loadPosts"
		}),
		
		async clickHandler() {
			await this.loadPosts();
			if (this.posts.items) {
				console.log("done");
				this.$toast.add({severity:"success", summary: "Success!", detail:"Posts are loaded.", life: 3000});
			}
		
		},
	},
	created(){
		this.columns = [
			{field: "id", header: "ID"},
			{field: "title", header: "Title"},
			{field: "body", header: "Body"},
		];
	},
	mounted() {
		
	}
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
	flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: rgb(94, 83, 71); */
}
</style>
