<template>
<transition  name="bounce">
	<aside>
		<slot></slot>
	</aside>
</transition>	
</template>

<script>
	export default{
		}
	
</script>

<style scoped>
	aside{
		transition: all 1.2s ease 0s;
		z-index: 10;
		position: fixed;
		top: 50px;
		left: 0px;
		background-color: black;
		width: 50%;
		height: 100%;
		color: white;
	}
	.bounce-enter-active {
     animation: bounce-in .5s;
   }
   .bounce-leave-active {
     animation: bounce-in .5s reverse;
   }
   @keyframes bounce-in {
     0% {
       transform: translateX(-100px);
       opacity: 0;
     }
     
     100% {
       transform: translateX(0px);
       opacity: 1;
     }
   }
</style>