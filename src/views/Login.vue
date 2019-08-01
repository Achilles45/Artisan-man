<template>
    <div class="login__wrapper container-fluid">
        <div class="container">
         
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
