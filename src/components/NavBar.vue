<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/">Главная страница</b-nav-item>
                    <b-nav-item href="/#/service">Перечень услуг</b-nav-item>
                    <b-nav-item href="/#/about">О нас</b-nav-item>
                    <b-nav-item href="/#/contact">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <img id="logo" alt="Vue logo" src="../assets/tsiryulnik.png" width="7%" height="7%" href="/">
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>