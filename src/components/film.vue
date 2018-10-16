<template>
<div>
	<ul>
		<router-link to = "/film/nowplaying" tag = "li" activeClass = "active">正在上映</router-link>
		<router-link to = "/film/commingsoon" tag = "li" activeClass = "active">即将上映</router-link>
	</ul>
	<router-view></router-view>
</div>		
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.$store.commit("changetitle","卖座电影")
		}
		}
	
</script>

<style scoped>
*{
	margin: 0px;
	padding: 0px;
}
html,body{
	height: 100%;
}
ul{
	display: flex;
	border-bottom: 1px solid #f60;
}
li{
	flex: 1;
	height: 50px;
	line-height: 50px;
	list-style: none;
	text-align: center;
}
.active{
	border-bottom:3px solid #f60;
	color: #f60;
}
</style>