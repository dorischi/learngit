<template>
	<div v-if = "filminfo">
		<img :src="filminfo.cover.origin"/>
		     <h2>{{filminfo.name}}</h2>
		<p>{{filminfo.synopsis}}</p>
	</div>

</template>

<script>
import axios from "axios"
import router from "../router"
	export default{
		data(){
			return{
				filminfo:null
			}
		},
		mounted(){
			console.log(this.$route.params.id);
			axios.get(`/v4/api/film/${this.$route.params.id}?__t=1539580260813`).then(res=>{
				console.log(res.data)
				this.filminfo = res.data.data.film
				this.$store.commit("changetitle",res.data.data.film.name)

			})
			
		}
	}
	// https://m.maizuo.com/v4/api/film/4433?__t=1539580260813
</script>

<style scoped>
	img{
		width: 100%;
	}
</style>