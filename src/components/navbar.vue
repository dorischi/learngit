<template>
	<nav>
		<div class="left">
			<slot></slot>
			<span>{{$store.state.title}}</span>
		</div>
		<div class="right">
			大连
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
nav{
	z-index: 11;
	position: fixed;
	top: 0px;
	left :0px;
	height: 50px;
	background-color: black;
	color: white;
	width: 100%;
	line-height: 50px;
}
.left{
	float: left;
}
.right{
	float: right;
}
</style>