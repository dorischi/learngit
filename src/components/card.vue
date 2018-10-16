<template>
	<div>
		<ul>
			<router-link to="/card/cardlog" tag="li" activeClass="active">卖座卡</router-link>
			<router-link to="/card/cardelec" tag="li" activeClass="active">电子卖座卡</router-link>
		</ul>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.$store.commit("changetitle","卖座电影");
		}
		}
	
</script>

<style scoped>
	ul{
		display:flex;
		border-bottom: 1px solid #f60;
	}
	li{
		flex: 1;
		text-align: center;
		display: block;
		height: 50px;
		line-height: 50px;
	}
	.active{
		border-bottom: 3px solid #f60;
		color: #f60;

	}
</style>