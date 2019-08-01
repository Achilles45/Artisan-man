<template>
    <div class="artisan__wrapper">
        <Navbar />
        <div class="artisan__container container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6 col-sm-10 col-xs-12">
                        <div class="artisan--wrapper">
                            <h3>Get verified in few minutes and start earning money!</h3><br />
                            <p>Register for free as an artisan on, get verified quickly and become more visible to people that needs your expertise in your neigbourhood </p><br />
                            <form>
                                <div class="form-group">
                                    <label for="">Register is you have any of these skills</label>
                                    <select name="" id="" class="form-control">
                                        <option value="">Electricals</option>
                                        <option value="">Plumbing</option>
                                        <option value="">Carpentry</option>
                                        <option value="">Painting</option>
                                        <option value="">Laundry</option>
                                        <option value="">Tilling</option>
                                        <option value="">Generator repairs</option>
                                    </select>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-md-6">

                                </div>
                                <div class="col-md-6">
                                    <router-link to="/register" class="artisan-btn">Get Started</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="artisan__benefits container-fluid">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12">
                        <h3>Benefits of an Artisan</h3>
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-4">
                                <i class="fa fa-money benefit-icons"></i>
                                <h5>Immediate Cashout</h5>
                                <p>Once a customer has confirmed your work that he/she is satisfied, you can choose to withdraw the money immediately or save it in our artisanPay platform and earn some competitive interest for a period of 90 days. No stories!</p>
                            </div>
                            <div class="col-md-4">
                                 <i class="fa fa-users benefit-icons"></i>
                                <h5>Be part of an exclusive community</h5>
                                <p>After registration and verification, you become part of our ecosystem. We will alwyas send deals in your areas to you. You also have access to our periodical human capacity development trainings where you can enhance your skills for free.</p>
                            </div>
                            <div class="col-md-4">
                                <i class="fa fa-unlock benefit-icons"></i>
                                <h5>Access other products</h5>
                                <p>We have other amazing products for you once you become an artisan. We could automate savings from your earnings for you plus many others coming.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
        <div class="how-it-works container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <hr />
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row text-center">
                    <div class="col-12">
                        <h3>How it Works</h3>
                    </div>
                </div>
                <div class="row text-center mt-4 mb-5">
                    <div class="col-md-4">
                        <h5>1. Sign Up</h5>
                           <p>Click Get started and the fill the form or login if you already have an account</p>
                           <i class="fa fa-user-plus signup-icons"></i>
                    </div>
                    <div class="col-md-4">
                        <h5>2. Get to work</h5>
                           <p>We would alert you once there is a job for you and you immediately get to work once you get one.</p>
                           <i class="fa fa-briefcase signup-icons"></i>
                    </div>
                    <div class="col-md-4">
                        <h5>3. Get paid</h5>
                           <p>You have the option to cash out after the customer has confirmed the job you did or save through artisanPay.</p>
                           <i class="fa fa-credit-card signup-icons"></i>
                    </div>
                </div><br /><br /><br />
                <hr />
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: 'artisan',
    components:{
        Navbar,
        Footer
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/colors';
.artisan__container{
    width: 100%;
    background:linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('./../assets/banner11.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 10rem 0;
    .artisan--wrapper{
        background: #fff;
        padding: 2rem 3rem;
        border-radius: 3px;
        h3{
            font-weight: 800;
            color: #1f1f1f;
            padding: 1.5rem 0;
        }
        p{
            color: #3d3d3d;
            font-weight: 400;
        }
        form{
            select{
                height: 2.8rem;
                border-radius: 3px;
                outline: none;
                box-shadow: none;
            }
        }
        .artisan-btn{
            background: $primary-color;
            color: #fff;
            padding: .7rem 2rem;
            text-decoration: none;
            display: block;
            border-radius: 3px;
            text-align: center;
        }
    }
}

 .artisan__benefits{
        background: #fff;
        h3{
            padding-top: 3rem;
            color: #1f1f1f;
            font-weight: 800;
        }
        .benefit-icons{
            color: $primary-color;
            font-size: 3rem;
            padding-bottom: 1rem;
        }
        h5{
            color: #1f1f1f;
            font-weight: bold;
        }
    }

    .how-it-works{
        margin-bottom: 2rem;
         h3{
            padding-top: 1rem;
            color: #1f1f1f;
            font-weight: 800;
        }
         h5{
            color: #1f1f1f;
            font-weight: bold;
        }
        .signup-icons{
            color: $primary-color;
            font-size: 2rem;
        }
    }
</style>
