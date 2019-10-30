import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MColumnTable, MColumnTextAlign } from '@ulaval/modul-components/dist/components';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';



@WithRender
@Component({
    components: {
        // tslint:disable-next-line: typedef
        MainLayout
    }
})
export default class AboutPage extends Vue {


    public patate: MColumnTextAlign = MColumnTextAlign.Center;

    public tablecolumns: MColumnTable[] = [
        { id: 'name', title: 'Name', dataProp: 'name' },
        { id: 'age', title: 'Age', dataProp: 'age' },
        { id: 'username', title: 'Username', dataProp: 'username' }];

    public tablesrows: any[] = [
        { id: '1', name: 'Jonathan', age: '25', username: 'jonathan.25' },
        { id: '2', name: 'Carl', age: '30', username: 'carl.30' },
        { id: '3', name: 'Jacob', age: '26', username: 'jacob.26' },
        { id: '4', name: 'Vincent', age: '34', username: 'vincent.34' },
        { id: '5', name: 'Manon', age: '28', username: 'manon.28' }
    ];

    public model: string = '';
}
