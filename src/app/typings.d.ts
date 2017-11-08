/*
vue-template-loader (@see https://github.com/ktsn/vue-template-loader)

This file tells Typescript to understand import statements which loads css, html or scss files
*/
/* tslint:disable:interface-name no-duplicate-imports */
declare module '*.html' {
    import Vue, { ComponentOptions } from 'vue';
    interface WithRender {
        <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
        <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export = withRender
}

declare module '*.scss' {
    import Vue, { ComponentOptions } from 'vue';
    interface WithRender {
        <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
        <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export = withRender
}

declare module '*.css' {
    import Vue, { ComponentOptions } from 'vue';
    interface WithRender {
        <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
        <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export = withRender
}
