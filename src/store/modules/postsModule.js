import { getPosts } from "@/api/posts";

export default {
	
	namespaced: true,

	state: {
		posts: {
			items: null,
			loading: false,
			error: ""
		}
	},
	getters: {
		getPosts(state) {
			return state.posts;
		}
	},
	mutations: {
		SET_POSTS(state, payload) {
			state.posts = {
				...state.posts,
				...payload
			};
			
		},
		
	},
	actions: {		
		async loadPosts(ctx) {
			
			ctx.commit("SET_POSTS", {
				items: null,
				loading: true,
				error: ""	
			});
			
			try {
				const resp = await getPosts();
				
				ctx.commit("SET_POSTS", {
					items: resp.data,					
				});
				
			} catch (error) {
				
				ctx.commit("SET_POSTS", {
					error: "Error while loading posts",					
				});
				throw Error(" error catched: ", error);
				
			} finally {
				ctx.commit("SET_POSTS", {
					loading: false,
				});
			}
			
		}
		
	},
};

