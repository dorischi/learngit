import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

import axios from "axios"
const store = new Vuex.Store({
    state:{
        title:"卖座电影111",
        list:[]
    },
    mutations:{
        changetitle(state,payload){
            state.title = payload;
        },
        changelistmutation(state,payload){
            state.list = payload;
        }
        // gettitle(){
        //     state.title = payload;
        // }
    },
    actions:{
        changelist(){
            axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
                console.log(res.data);
                store.commit("changelistmutation",res.data.data.films)

            })
        }
    }
})
// https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
export default store;