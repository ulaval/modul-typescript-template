<template>
    <div class="navigation">
        <h3 class="m-u--h3">NAVIGATION</h3>

        <div>
            <m-link mode="link" url="#">A link</m-link>
        </div>
        <div>
            <m-navbar
                :selected.sync="selectedItem"
                skin="nav-main"
                :multiline="true"
                title-button-left="Naviguer précédent"
                title-button-right="Naviguer suivant"
                max-width="720px"
            >
                <m-navbar-item value="1">item #1</m-navbar-item>
                <m-navbar-item value="2">item #2</m-navbar-item>
                <m-navbar-item value="3">item #3</m-navbar-item>
            </m-navbar>
        </div>
        <p>
            <m-menu>
                <div slot="trigger">Menu</div>
                <m-menu-item value="Ajouter" label="Ajouter"></m-menu-item>
                <m-menu-item value="Modifier" label="Modifier"></m-menu-item>
                <m-menu-item value="Supprimer" label="Supprimer"></m-menu-item>
                <m-menu-item value="Archiver" label="Archiver"></m-menu-item>
            </m-menu>
        </p>
        <p>
            <m-option>
                <m-option-item-add></m-option-item-add>
                <m-option-item-edit></m-option-item-edit>
                <m-option-item-archive></m-option-item-archive>
                <m-option-item-delete :disabled="true"></m-option-item-delete>
            </m-option>
        </p>
        <p>
            scroll to top
            <m-scroll-top position="relative"></m-scroll-top>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MLink } from '@ulaval/modul-components';
import { MNavbar } from '@ulaval/modul-components';
import { MNavbarItem } from '@ulaval/modul-components';
import { MMenuItem } from '@ulaval/modul-components';
import { MMenu } from '@ulaval/modul-components';
import { MOption } from '@ulaval/modul-components';
import { MOptionItem } from '@ulaval/modul-components';
import { MScrollTop } from '@ulaval/modul-components';

@Component({
    components: {
        'm-link': MLink,
        'm-navbar': MNavbar,
        'm-navbar-item': MNavbarItem,
        'm-menu': MMenu,
        'm-menu-item': MMenuItem,
        'm-option': MOption,
        'm-option-item': MOptionItem,
        'm-scroll-top': MScrollTop,
    },
})
export default class Navigation extends Vue {
    public selectedItem: string = '1';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@ulaval/modul-components/dist/styles/commons';

/*
 .app-etudiantformulaire {
      background: $m-color--ul-blue;
    }
*/
</style>
