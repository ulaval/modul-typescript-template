import MainHeader from '@/common/components/main-header/main-header';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-layout.html?style=./main-layout.scss';

@WithRender
@Component({
    components: { MainHeader }
})
export default class MainLayout extends Vue {
}
