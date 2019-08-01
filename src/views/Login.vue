<template>
    <div class="login__wrapper container-fluid">
        <div class="container">
           <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
                    <div class="login__card">
                <router-link to="/" class="logo"><h3 class="text-center">ArtisanMan</h3></router-link>
            </div>
               </div>
               <div class="col-md-3"></div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login'
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.login__wrapper{
    background: $primary-color;
    height: 100vh;
    .login__card{
        background: #fff;
        padding: 2rem;
        margin-top: 50%;
        border-radius: 3px;
    }
}
</style>
