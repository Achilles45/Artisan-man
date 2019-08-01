<template>
  <div class="home">
    <Banner />
    <div class="services container-fluid">
      <div class="service-intro mt-3">
        <h3>Are you looking for artisans for your home or office?</h3>
      <p>We provide you with artisans that are skilled quickly to fix any issue</p>
      </div>
      <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="sevices__cards--wrapper mt-5 mb-4">
            <div class="service-card">
              <div class="service-card--img">
                <img src="../assets/plumbing.png" class="img-fluid img" alt="">
                 <div class="card--overlay">
                  <p class="lead ml-2 mt-3 mb-3">Plumbing</p>
                </div>
              </div>
            </div>
            <div class="service-card">
              <div class="service-card--img">
                <img src="../assets/electricals.png" class="img-fluid img" alt="">
                 <div class="card--overlay">
                  <p class="lead ml-2 mt-3 mb-3">Electricals</p>
                </div>
              </div>
            </div>
            <div class="service-card">
              <div class="service-card--img">
                <img src="../assets/banner5.jpeg" class="img-fluid img" alt="">
                  <div class="card--overlay">
                  <p class="lead ml-2 mt-3 mb-3">Building</p>
                </div>
              </div>
            </div>
            <div class="service-card">
              <div class="service-card--img">
                <img src="../assets/carpentry.png" class="img-fluid img" alt="">
                  <div class="card--overlay">
                  <p class="lead ml-2 mt-3 mb-3">Carpentry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center mt-3 mb-3">
          <div class="col-12">
            <h5 class="mb-4">Can't find the service you are looking for?</h5>
            <router-link :to="{name: 'Book'}" class="service-btn">Check Here</router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!--Edn of service section
    ===========================-->
    <!--How it works section
    ===========================-->
    <section class="how__it__works container-fluid">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <div class="process__heading">
              <h3>HOW IT WORKS</h3>
              <P>The process of becomming an artisan, and finding an artisan is very easy and seamless</P>
            </div>
          </div>
        </div>
        <div class="row mt-4 mb-5">
          <div class="col-md-4">
            <i class="fa fa-users process-icons"></i>
            <h5>Artisan registeration and Verification</h5>
            <p>Becoming an artisan is very easy and can be done in few clicks. Provide valid information only and you will be verified in few minutes. Start getting recommended today!</p>
          </div>
           <div class="col-md-4">
            <i class="fa fa-search process-icons"></i>
            <h5>Pick a Service</h5>
            <P>Our matching algorithm identifies & alerts the best available & verified worker in your neighborhood for the Job. If you're not comfortable with the worker, you can request another for free.</P>
          </div>
           <div class="col-md-4 process-icons">
            <i class="fa fa-money"></i>
            <h5>Make Payment</h5>
            <p>You only make payment to ArtisanMan only when the job has been done and you are satisfied.</p>
          </div>
        </div>
      </div>
    </section>
    <!--End of how is work section
    ==============================-->
    <!--Artisan section
    ===============================-->
    <section class="artisan container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-12 col-sm-12 mb-4">
            <img src="../assets/expert.png" class="img-fluid artisan-img" alt="">
          </div>
          <div class="col-md-5">
            <h3>You can make &#8358;20,000 weekly as an artisan on this platform</h3>
            <p>Get access to a lot of people that needs your services in your locality</p><br />
            <router-link :to="{name: 'Artisan'}" class="artisan-btn">Find Out More</router-link>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </section>
    <!--End of artisan section
    ===========================-->
    <!--Guarantee section
    ===========================-->
    <section class="guarantee container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
              <img src="../assets/guarantee2.png" class="img-fluid guarantee" alt="">
          </div>
           <div class="col-md-6">
             <div class="row mt-5">
               <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-2">
                      <i class="fa fa-check guarantee-icons"></i>
                    </div>
                    <div class="col-md-10">
                        <h6>Verified Artisians</h6>
                        <p>We vet and verify every artisan on this platform to make sure that you get quality services by qualified artisans.</p>
                    </div>
                  </div>
               </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-2">
                      <i class="fa fa-lock guarantee-icons"></i>
                    </div>
                    <div class="col-md-10">
                        <h6>Secured Payment</h6>
                        <p>Payment made either through card payments or bank transfer are propery encrypt. Your information is not stored!</p>
                    </div>
                  </div>
               </div>
                <div class="col-md-6">
                    <div class="row">
                    <div class="col-md-2">
                      <i class="fa fa-comments guarantee-icons"></i>
                    </div>
                    <div class="col-md-10">
                        <h6>Real time Support</h6>
                        <p>Our customer support team is always ready to provide answers to all your queries. Reach out to the today.</p>
                    </div>
                  </div>
               </div>
                <div class="col-md-6">
                    <div class="row">
                    <div class="col-md-2">
                      <i class="fa fa-cubes guarantee-icons"></i>
                    </div>
                    <div class="col-md-10">
                        <h6>Quality Services</h6>
                        <p>We train and make sure that services rendered by our partner artisans meets standard and specifications.</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    <!--End of guarantee section
    ==============================-->
    <!--Footer
    =================================-->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: 'Index',
  components:{
    Banner,
    Footer
  }
}
</script>
<style lang="scss" scoped>

</style>
