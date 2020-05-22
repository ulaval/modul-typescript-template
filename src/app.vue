<template>
    <div id="app" class="m-u--app-body">
        <div id="nav">
            <router-link to="/">Home</router-link>
            &nbsp;
            <router-link to="/ajout">formulaire</router-link>
            &nbsp;
            <router-link to="/boutons">boutons</router-link>
            &nbsp;
            <router-link to="/fenetres">fenetres</router-link>
            &nbsp;
            <router-link to="/navigation">navigation</router-link>
            &nbsp;
            <router-link to="/tableaux">tableaux</router-link>
        </div>
        <router-view />
    </div>
</template>
