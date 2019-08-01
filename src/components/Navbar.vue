<template>
    <div class="navbar__wrapper container-fluid">
        <div class="container">
            <div class="navbar d-flex justify-content-between">
                <div class="navbar__logo">
                    <router-link to="/" class="navbar-logo"><h3>ArtisanMan</h3></router-link>
                </div>
                <div class="navbar__items">
                    <ul class="d-flex justfiy-content-between navbar__links">
                        <li><router-link to="/book" class="nav__links">Book an Artisan</router-link></li>
                        <li><router-link to="/atsisan" class="nav__links">Become an Artisan</router-link></li>
                        <li><router-link to="/login" class="nav__links">Login</router-link></li>
                    </ul>
                </div>
                <div @click="openNav()" class="navbar__toggler">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    },
    methods:{
        openNav: function(){
            const nav = document.querySelector('.navbar__links');
            nav.classList.toggle('show-nav');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/colors';
    .navbar__wrapper{
        background: #FFF;
        color:#fff;
        align-items: center;
        box-shadow: 0px 0px 2px rgba(0,0,0,.5);
        position: fixed;
        z-index: 2;
        .navbar-logo{
            text-decoration: none !important;
             h3{
            color: #1F1F1F;
            align-self: center;
            margin-top: .5rem;
            font-size: 1.2rem;
        }
        }
        .navbar__items{
            .navbar__links{
                margin-top: .7rem;
                .nav__links{
                    color: #1F1F1F;
                    text-decoration: none;
                    margin-left: 1.3rem;
                }
            }
        }
        .navbar__toggler{
            display: none;
        }
    }


    //MEDIA QUERIES
@media only screen and (max-width: 768px) {
    .navbar__wrapper{
        padding: 1rem 0;
    }
    .navbar__links{
        background: #828282;
        flex-direction: column;
        position: absolute;
        right: 2rem;
        top: 6rem;
        padding: 2.5rem;
        z-index: 2;
        display: none !important;
        border-radius: 3px;
        height: 20rem;
    }
    .nav__links{
        color: #fff !important;
        line-height: 2.5;
    }
     .navbar__toggler{
        display: block !important;
        color: #656565;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .show-nav{
        display: block !important;
    }
}
</style>
