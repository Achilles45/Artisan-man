<template>
    <div class="login__wrapper container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-4">

                </div>
                <div class="col-md-4 login__card">
                    <div class="row text-center">
                        <div class="col-12">
                <router-link to="/"><img src="../assets/logo.jpg" class="img-fluid logo" alt=""></router-link>
                    </div>
                    </div>
                 <form mt-3 @submit.prevent="logIn()">
                     <div v-if="feedback" class="feedback">
                         <div class="alert alert-danger">{{ feedback }}</div>
                     </div>
                     <div class="form-group">
                         <input type="text" class="form-control" placeholder="Email Address" v-model="email">
                     </div>
                      <div class="form-group">
                         <input type="password" class="form-control" placeholder="Password" v-model="password">
                     </div>
                     <button type="submit" class="login-btn d-block">Login</button>
                 </form>
                 <h6 class="text-center pt-4">New to ArtisanMan?&nbsp; <router-link to="/register">Create Account</router-link></h6>
                 <h6 class="text-center"><router-link to="/">Forgot Password?</router-link></h6>
                </div>
                <div class="col-md-4">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase, { functions } from  "firebase"
import { setTimeout } from 'timers';
export default {
    name: 'login',
    data(){
        return{
            email: null,
            password: null,
            feedback: null,
        }
    },
    methods:{
        clearMsg: function(){
            setTimeout(()=>{
                document.querySelector('.alert').remove()
            }, 3000)
        },
        logIn: function(){
            if (this.email && this.password) {
                //Login he user
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred=>{
                    this.$router.push({name: 'dashboard'})
                })
                .catch(err=>{
                    this.feedback = err.message;
                })
            }else{
                this.feedback = 'Please, provide your credentials.'
                this.clearMsg();
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.login__wrapper{
    background: $primary-color;
    height: 100vh;
    .login__card{
        background: #fff;
        margin-top: 10rem;
        padding: 2.5rem;
        border-radius: 3px;
        .logo{
            height: 100px;
        }
        form{
            padding-top: 1rem;
            input[type=text], input[type=password]{
                background-color: transparent;
                border-radius: 3px;
                color: #656565;
                box-shadow: none;
                border: 1px solid rgba(209,209,209,0.56);
                height: 2.88rem;
                margin-top: .5rem;
            }
            .login-btn{
                background: $primary-color;
                color: #fff;
                text-align: center;
                padding: .7rem 0;
                border: 0;
                display: block;
                width: 100%;
            }
        }
        .account{
            color: #1f1f1f;
        }
    }
}

</style>
