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
                 <form mt-3>
                     <div class="form-group">
                         <input type="text" class="form-control" placeholder="Email Address">
                     </div>
                      <div class="form-group">
                         <input type="password" class="form-control" placeholder="Password">
                     </div>
                     <button type="submit" class="login-btn d-block">Login</button>
                 </form>
                 <h6 class="text-center pt-4">New to ArtisanMan?&nbsp; <router-link to="/">Create Account</router-link></h6>
                 <h6 class="text-center"><router-link to="/">Forgot Password?</router-link></h6>
                </div>
                <div class="col-md-4">
                    
                </div>
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
    height: auto;
    .login__card{
        background: #fff;
        margin: 10rem 0;
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
                border: 2px solid rgba(209,209,209,0.56);
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
