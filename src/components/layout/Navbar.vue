<template>
    <div class="navbar">
        <nav class="teal">
            <div class="nav-wrapper container">
            <a class="brand-logo"><router-link to="/">Depositos</router-link></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a><router-link to="/">Home</router-link></a></li>
                <li><a><router-link to="/about">About</router-link></a></li>
            </ul>
            </div>
        </nav>

        <!-- <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul> -->

        <a class="btn-floating btn-large waves-effect waves-light red add-data"><router-link :to="{name: 'add'}"><i class="material-icons">add</i></router-link></a>

    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
    .navbar .add-data {
        position: absolute;
        right: 5%;
        bottom: 5%;
    }
</style>
