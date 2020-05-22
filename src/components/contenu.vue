<template>
    <div class="contenu">
        <h3 class="m-u--h3">CONTENU</h3>

        <div>
            <m-button @click="onToggleToast">Toggle the toast</m-button>
            <m-spinner :title="true" :description="true"></m-spinner>
            <m-message>A message for testing purposes</m-message>
            <!-- <m-steppers>
            <m-steppers-item state="visited">Label 1</m-steppers-item>
            <m-steppers-item state="visited">Label 2</m-steppers-item>
            <m-steppers-item state="in-progress">Label 3</m-steppers-item>
            <m-steppers-item state="disabled">Label 4</m-steppers-item>
        </m-steppers> -->
        </div>
        <div>
            <h4 class="m-u--h4">Accordion example</h4>
            <m-accordion-group>
                <m-accordion>Some Accordion Content</m-accordion>
                <m-accordion>Some Accordion Content</m-accordion>
                <m-accordion>Some Accordion Content</m-accordion>
            </m-accordion-group>
        </div>

        <div>
            <h4 class="m-u--h4">tree example</h4>
            <m-tree :tree="tree" selection-mode="none"></m-tree>
        </div>
        <m-panel>
            <h2 slot="header">Panel</h2>
            Do consectetur aute pariatur amet ut pariatur Lorem. Commodo
            exercitation et incididunt tempor aliqua culpa culpa. Do sint
            exercitation quis amet.
        </m-panel>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TreeNode, MTree } from '@ulaval/modul-components';
import { MButton } from '@ulaval/modul-components';
import { MAccordionGroup } from '@ulaval/modul-components';
import { MAccordion } from '@ulaval/modul-components';
import { MPanel } from '@ulaval/modul-components';
import { MSpinner } from '@ulaval/modul-components';
import { MMessage } from '@ulaval/modul-components';

@Component({
    components: {
        'm-button': MButton,
        'm-accordion-group': MAccordionGroup,
        'm-accordion': MAccordion,
        'm-panel': MPanel,
        'm-tree': MTree,
        'm-spinner': MSpinner,
        'm-message': MMessage,
    },
})
export default class Contenu extends Vue {
    public openProp: boolean = false;

    public tree: TreeNode[] = [
        {
            id: '1',
            label: 'Title 1',
            hasChildren: true,
            children: [
                {
                    id: '2',
                    label: 'Subtitle 1',
                },
                {
                    id: '3',
                    label: 'Subtitle 2',
                    children: [
                        {
                            id: '2',
                            label: 'Subtitle 5',
                        },
                        {
                            id: '3',
                            label: 'Subtitle 6',
                            hasChildren: true,
                        },
                        {
                            id: '4',
                            label: 'Subtitle 3',
                        },
                        {
                            id: '5',
                            label: 'Subtitle 4',
                        },
                    ],
                },
                {
                    id: '4',
                    label: 'Subtitle 3',
                },
                {
                    id: '5',
                    label: 'Subtitle 4',
                },
            ],
        },
        {
            id: '6',
            label: 'Title 2',
        },
        {
            id: '7',
            label: 'Title 3',
            open: true,
            children: [
                {
                    id: '1',
                    label: 'Subtitle 1',
                },
                {
                    id: '2',
                    label: 'Subtitle 2',
                },
            ],
        },
    ];

    public onToggleToast(): void {
        this.$toast.show({ text: "i'm a toast" });
    }
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
