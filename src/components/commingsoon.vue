<template>
	<div>
		<ul>
			<li v-for="data in list">
				<img :src="data.poster.origin"/>
				<div id="content">
					<h5>{{data.name}}</h5><br/>
					<span>{{data.intro}}</span>
				</div>
			</li>
		</ul>
	</div>	
</template>

<script>
import {mapState} from "vuex"

	import axios from "axios"
	import router from "../router"
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			handleClick(id){
				router.push(`/detail/${id}`)
			}
		},
		mounted(){
			if(this.$store.state.list.length==0){
				this.$store.dispatch("changelist");
				
					
				}
			},
		computed:{
			...mapState(["list"])
		}
		
	}
	// https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
</script>

<style scoped>
img{
	width: 20%;
    transition: all 1.2s ease 0s;
    opacity: 1;
	padding-left: 10px;
	}
li{
	width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;	}
h5{
	font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;	
	}
span{
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}	
#content{
	padding-left: 15px;
    display: inline-block;
    width: 75%;
}
</style>