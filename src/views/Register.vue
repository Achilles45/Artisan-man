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
                    <form>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="First Name">
                               </div>
                           </div>
                            <div class="col-md-6">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="Last Name">
                               </div>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                            <select name="state" id="state" class="form-control">
                                <option selected="selected">Currrent State</option>
                                <option value='Abia'>Abia</option>
                                <option value='Adamawa'>Adamawa</option>
                                <option value='AkwaIbom'>AkwaIbom</option>
                                <option value='Anambra'>Anambra</option>
                                <option value='Bauchi'>Bauchi</option>
                                <option value='Bayelsa'>Bayelsa</option>
                                <option value='Benue'>Benue</option>
                                <option value='Borno'>Borno</option>
                                <option value='CrossRivers'>CrossRivers</option>
                                <option value='Delta'>Delta</option>
                                <option value='Ebonyi'>Ebonyi</option>
                                <option value='Edo'>Edo</option>
                                <option value='Ekiti'>Ekiti</option>
                                <option value='Enugu'>Enugu</option>
                                <option value='Gombe'>Gombe</option>
                                <option value='Imo'>Imo</option>
                                <option value='Jigawa'>Jigawa</option>
                                <option value='Kaduna'>Kaduna</option>
                                <option value='Kano'>Kano</option>
                                <option value='Katsina'>Katsina</option>
                                <option value='Kebbi'>Kebbi</option>
                                <option value='Kogi'>Kogi</option>
                                <option value='Kwara'>Kwara</option>
                                <option value='Lagos'>Lagos</option>
                                <option value='Nasarawa'>Nasarawa</option>
                                <option value='Niger'>Niger</option>
                                <option value='Ogun'>Ogun</option>
                                <option value='Ondo'>Ondo</option>
                                <option value='Osun'>Osun</option>
                                <option value='Oyo'>Oyo</option>
                                <option value='Plateau'>Plateau</option>
                                <option value='Rivers'>Rivers</option>
                                <option value='Sokoto'>Sokoto</option>
                                <option value='Taraba'>Taraba</option>
                                <option value='Yobe'>Yobe</option>
                                <option value='Zamfara'>Zamafara</option>
                        </select>
                        </div>
                    </div>
                           <div class="col-md-6">
                                 <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Town or City">
                                </div>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="text" class="form-control" placeholder="Phone Number">
                               </div>
                           </div>
                           <div class="col-md-6">
                               <input type="text" class="form-control" placeholder="Email Address">
                           </div>
                       </div>
                         <div class="form-group">
                           <select name="" id="" class="form-control">
                               <option value="">Select skill</option>
                                <option value="">Electricals</option>
                                    <option value="">Plumbing</option>
                                    <option value="">Carpentry</option>
                                    <option value="">Painting</option>
                                    <option value="">Laundry</option>
                                    <option value="">Tilling</option>
                                    <option value="">Generator repairs</option>
                           </select>
                       </div>
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <input type="password" class="form-control" placeholder="Password">
                               </div>
                           </div>
                            <div class="col-md-6">
                               <div class="form-group">
                                   <input type="password" class="form-control" placeholder="Confirm Password">
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
export default {
    name: 'register',
    data(){
        return{
            
        }
    },
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
            input[type=text], input[type=password], select{
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
