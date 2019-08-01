<template>
    <div class="banner__wrapper container-fluid">
        <div class="container">
            <!--Navbar section
            ====================-->
            <div class="navbar__wrapper d-flex justify-content-between">
                <div class="navbar__logo">
                    <router-link :to="{name: 'Index'}" class="navbar__brand"><h3>ArtisanMan</h3></router-link>
                </div>
                <div class="navbar__items">
                    <ul class="d-flex justify-content-between nav__items">
                        <li><router-link :to="{name: Artisan}" class="nav-links">Book an Artisan</router-link></li>
                        <li><router-link :to="{name: Artisan}" class="nav-links artisan-link">Become an Artisan</router-link></li>
                        <li><router-link :to="{name: Artisan}" class="nav-links login-link">Login</router-link></li>
                    </ul>
                </div>
                <div @click="showNav()" class="navbar-toggler">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
            <!--End of Navbar ssection
            ==========================-->
            <!--Hero-section begins here
            ==========================-->
            <section class="hero-section">
                <div class="row text-center">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                    <h2>Hire Trusted Artisans in your Locality</h2>
                    <p>Get access to trained and verified service providers in plumbing, electricals, carpentry,        painting, cleaning & Laundry and others here. The artisans are in your neighbourhood, so we respond in few minutes. Try us now!</p>
                    <router-link :to="{name: 'Book'}" class="hero-btn">Book An Artisan</router-link>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    data(){
        return{

        }
    },
    methods:{
        showNav: function(){
            const nav = document.querySelector('.nav__items');
            nav.classList.toggle('show-nav');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.banner__wrapper{
    width: 100%;
    background:linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('./../assets/banner11.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .navbar__wrapper{
        padding-top: 2.5rem;
        .navbar__logo{
            .navbar__brand{
                color: #fff;
                text-decoration: none;
                font-weight: bold
            }
        }
        .navbar__items{
               .nav__items{
                   .nav-links{
                       color: #fff !important;
                       text-decoration: none;
                       margin-left: 2rem;
                   }
                  .login-link{
                       border: .5px solid #fafafa;
                       padding: .6rem 2rem;
                       border-radius: 3px;
                       opacity: .7;
                   }
               }
            }
            .navbar-toggler{
                display: none
            }
    }

    //HERO-SECTION
    .hero-section{
        padding: 8rem 0;
        color: #fff;
        h2{
            color: #fff;
            font-weight: bold;
            word-spacing: 2px;
            font-size: 2.5rem;
            padding-bottom: .7rem;
        }
        p{
            letter-spacing: .4px;
            margin-bottom: 2rem;
        }
        .hero-btn{
            border: 1px solid #fff;
            padding: .7rem 2rem;
            text-align: center;
            text-decoration: none;
            color: #fff;
            border-radius: 3px;
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 768px) {
    .nav__items{
        background: #828282 !important;
        flex-direction: column;
        position: absolute !important;
        right: 2rem;
        top: 6rem;
        padding: 2.5rem;
        z-index: 2;
        display: none !important;
        border-radius: 3px;
        height: 20rem;
    }
    .show-nav{
        display: block !important;
        transition: all ease-in-out .5s;
    }
     .nav-links{
              line-height: 2.7;
              margin-left: .5rem !important;
          }
            .login-link{
              border: none !important;
              padding: 0 !important;
              opacity: 1 !important;
          }
          .navbar-toggler{
              display: block !important;
              cursor: pointer;
              color:#fff;
          }
}
</style>
