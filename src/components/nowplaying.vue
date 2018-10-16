<template>
	<div>
	 <ul>
	 	<li v-for = "data in datalist" @click="handleClick(data.id)">
		 	<img :src="data.poster.origin"/>
		 	<div id="content">
			 	    <span>{{data.name}}</span>
			 	    <span class = "grade">{{data.grade}}</span><br/>
			 		<span>{{data.intro}}</span><br/>
			 		<span>{{data.cinemaCount}}家影院上映</span><br/>
			 		<span>{{data.watchCount}}人观看</span>

			</div>			 		

	 	</li>
	 </ul>
	</div>	
</template>

<script>
import router from "../router"
import axios from "axios"

	export default{
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			handleClick(id){
				router.push(`/detial/${id}`)
			}
		},
		mounted(){
			axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
				console.log(res.data);
				this.datalist = res.data.data.films
			}).catch(error=>{
				console.log(error)
			})
		}
	}
	// https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
</script>

<style scoped>
	li{
		width: 100%;
		border-bottom: 1px dashed #ccc;
	}
	img{
	overflow: hidden;
	width: 20%;
    transition: all 1.2s ease 0s;
    opacity: 1;
	padding: 20px 0 20px 10px;
	
	}
	#content{
	padding-left: 15px;
    display: inline-block;
    width: 75%;
	}
	span{
		font-size: 10px;
		color: #999;
	}
	.grade{
		float: right;
		color: #f60;
		font-size: 20px;
	}

</style>