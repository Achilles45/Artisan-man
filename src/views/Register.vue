<template>
    <div class="register__wrapper container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-4">

                </div>
                <div class="col-md-4 register-card">
                      <div class="row text-center">
                        <div class="col-12">
                            <router-link to="/"><img src="../assets/logo.jpg" class="img-fluid logo" alt=""></router-link>
                        </div>
                    </div>
                    <div v-if="feedback" class="feeback">
                        <div class="alert alert-danger">{{ feedback}}</div>
                    </div>
                    <div v-if="success" class="success">
                        <div class="alert alert-success">{{ success}}</div>
                    </div>
                    <form @submit.prevent="registerArtisan()">
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="First Name" v-model="fname" autocomplete="off">
                               </div>
                           </div>
                            <div class="col-md-6">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="Last Name" v-model="lname" autocomplete="off">
                               </div>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                            <input type="text" class="form-control" placeholder="State of Residense" v-model="state" autocomplete="off">
                        </div>
                    </div>
                           <div class="col-md-6">
                                 <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Town or City" v-model="city" autocomplete="off">
                                </div>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone" autocomplete="off" pattern="\d{0,15}">
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="form-group">
                               <input type="email" class="form-control" placeholder="Email Address" v-model="email" autocomplete="off">
                               </div>
                           </div>
                       </div>
                         <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter your skill" v-model="skill" autocomplete="off">
                       </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Username" v-model="uname" autocomplete="off">
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="password" class="form-control" placeholder="Password" v-model="password" autocomplete="off">
                               </div>
                           </div>
                            <div class="col-md-6">
                               <div class="form-group">
                                   <input type="password" class="form-control" placeholder="Confirm Password" v-model="repeatPassword" autocomplete="off">
                               </div>
                           </div>
                       </div>
                        <button type="submit" class="register-btn d-block">Register</button>
                        <h6 class="text-center mt-3">Already have an artisanMan account?&nbsp;  <router-link to="/login">Login</router-link></h6>
                    </form>
                </div>
                <div class="col-md-4">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
import db from "@/firebase/init";
import firebase from "firebase";
export default {
    name: 'register',
    data(){
        return{
            fname: null,
            lname: null,
            state: null,
            city: null,
            phone: null,
            email: null,
            skill: null,
            uname: null,
            password: null,
            repeatPassword: null,
            feedback: null,
            success: null
        }
    },
    methods:{
        //Function to clear messages
        clearMsg: function(){
            setTimeout(()=>{
                document.querySelector('.alert').remove()
            },3000)
        },
        registerArtisan: function(){
            if (this.fname || this.lname || this.state || this.city || this.phone || this.email ||this.skill || this.uname || this.password || this.repeatPassword) {
                if(this.password != this.repeatPassword){
                    this.feedback = "Password do not match";
                       this.clearMsg();
                }else{
                  //Check the database if the username allready exists
                  let ref = db.collection('artisans').doc(this.uname);
                  ref.get().then(doc =>{
                      if(doc.exists){
                          this.feedback = 'Ops! Username already taken';
                      }else{
                          //Let's sign up the user now
                          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                          .then(cred=>{
                              ref.set({
                                  First_Name: this.fname,
                                  Last_Name: this.lname,
                                  State: this.state,
                                  City: this.city,
                                  Phone: this.phone,
                                  Skill: this.skill,
                                  User_id: cred.user.uid,
                              })
                              .then(()=>{
                                  this.$router.push({name: 'dashboard'})
                              })
                          })
                          .catch(err=>{
                              this.feedback = err.message
                          })
                      }
                  })
                }
            }else{
                this.feedback = "Oops! All fields are required"
                this.clearMsg();
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles/_colors.scss';
.register__wrapper{
    background: $primary-color;
    height: auto;
    .register-card{
        background: #fff;
        padding: 2rem 1rem;
        margin: 4rem 0;
        border-radius: 3px;
        .logo{
            height: 100px;
        }
        form{
            padding-top: 1rem;
<<<<<<< HEAD
            input[type=text], input[type=password], select{
=======
            input[type=text], input[type=password], input[type=email], input[type=tel], select{
>>>>>>> designs
                background-color: transparent;
                border-radius: 3px;
                color: #656565;
                box-shadow: none;
                border: 1px solid rgba(209,209,209,0.56);
                height: 2.88rem;
                margin-top: .5rem;
            }
            .register-btn{
                background: $primary-color;
                color: #fff;
                text-align: center;
                border: none;
                padding: .6rem;
                display: block;
                width: 100%;
            }
        }
    }
}
</style>
