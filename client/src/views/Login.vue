<template>

<div class="level section">

<div class="level-item">


    <form>
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" @click.prevent="login">
            Login
            </button>
        </p>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
    methods: {
        login(){
            session.user = {
                name: 'Alex Carlson',
                handle: 'carlsona1',
                profile: 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/p960x960/10321068_10201026039213170_1030503205428766607_o.jpg?_nc_cat=107&ccb=2&_nc_sid=85a577&_nc_ohc=yTrlrtsLps4AX_nDS4I&_nc_ht=scontent-lga3-1.xx&tp=6&oh=c5eea6e9bb915d6f67ad9551a7f434f8&oe=5FCD91BD'
            }
            session.addNotification('Yay! You logged in', 'success')
            this.$router.push('feed')
        }
    }
}
</script>

<style>
    
</style>