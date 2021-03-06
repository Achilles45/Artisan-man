import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";

Vue.config.productionTip = false

let app = null;

//Wait for firebase auth to init before creating the app

firebase.auth().onAuthStateChanged(()=>{
  //init the app if not already created
 if (!app) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
 }
})

