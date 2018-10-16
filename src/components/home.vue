<template>
	<div>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in looplist">
        	<img :src="data.imageUrl"/>
        </div>

      </div>
    </div>
		<ul>
			<li v-for="data in datalist">
				<router-link to = "/home/detial"><img :src="data.cover.origin"/></router-link>
				<div class = "left topic">
					<h3>{{data.name}}</h3>
					<span class = "cinemaCount">{{data.cinemaCount}}家影院上映</span>
					<span class = "watchCount">{{data.watchCount}}人购票</span>
					<span class = "right grade">{{data.grade}}</span>
				</div>		
			</li>
		</ul>	
	</div>	
</template>

<script>
import Swiper from "swiper"
import axios from "axios"
	export default{
		data(){
			return{
				datalist:[],
				looplist:[]
				}
			},
		mounted(){
			this.$store.commit("changetitle","卖座电影");
			axios.get("/v4/api/film/now-playing?__t=1539390689746&page=1&count=5").then(res=>{
				console.log(res.data)
				this.datalist = res.data.data.films
			}).catch(error=>{
				console.log(error)
			}),
			axios.get("/v4/api/billboard/home?__t=1539582101529").then(res=>{
				console.log(res.data)
				this.looplist = res.data.data.billboards;
				this.$nextTick(res=>{
					var swiper = new Swiper('.swiper-container',{
						// axios.get("/v4/api/billboard/home?__t=1539565079413").then(res=>{
				// console.log(res.data);
				// this.looplist = res.data.data.billboards;
				// this.$nextTick(res=>{
			   		// var swiper = new Swiper('.swiper-container',{
			   			
			   		// });
			   	// })
			// })
						
					});
				})
			})
		},
	}
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1539390689746&page=1&count=5
	// https://m.maizuo.com/v4/api/billboard/home?__t=1539582101529
</script>

<style scoped>
img{
	width: 100% ;
}
.right{
	float: right;
}
.left{
	float: left;
}
.topic{
	background-color: white;
	width: 100%;
}
.grade{
	color: #f60;
	font-size: 25px;
}
body{
  background-color: #ccc;
}

</style>