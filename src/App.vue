<template>
  <div>
    <navbar>
    <i class="iconfont icon-category" @click = "isShow=!isShow"></i>
    </navbar>
    <sidebar v-show="isShow">
      <ul @click="isShow=!isShow">
        <router-link tag="li" to="/home" activeClass="kerwinactive">home</router-link>
        <router-link tag="li" to="/film" activeClass="kerwinactive">film</router-link>
        <router-link tag="li" to="/card" activeClass="kerwinactive">card</router-link>
      </ul>
    </sidebar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

import navbar from './components/navbar'
import sidebar from './components/sidebar'

  export default{
    data(){
      return{
        isShow:false
      }
    },    
    components:{
      navbar,
      sidebar
    }
    }
  
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
body,html{
  height: 100%;
}
section{
  height: 100%;
  position: relative;
  top: 50px;
}
li{
  list-style: none;

}


</style>