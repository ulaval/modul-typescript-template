<template>
    <div class="app-etudiantformulaire">
        <h1>This is the EtudiantForm Component</h1>
        <div class="formulaire">
            <h3 class="m-u--h4">FORMULAIRE</h3>
            <m-form class="m-u--margin-top" :form-group="formGroup">
                <div>
                    <h3 class="m-u--h4">Textfield example</h3>
                    <m-textfield
                        v-model="nameField.value"
                        v-m-control="nameField"
                        :required-marker="true"
                        placeholder="placeholder"
                        label="label"
                        helper-message="2 characters min - 20 characters max"
                        :character-count="true"
                        :error="nameField.hasError()"
                        :error-message="nameField.errorMessage"
                    ></m-textfield>
                </div>
                <div>
                    <h3 class="m-u--h4">Phonefield</h3>
                    <m-phonefield></m-phonefield>
                </div>
                <div>
                    <h3 class="m-u--h4">Rich text editor</h3>
                    <m-rich-text-editor></m-rich-text-editor>
                </div>
                <div>
                    <h3 class="m-u--h4">Drodown</h3>
                    <m-dropdown
                        v-model="typeField.value"
                        v-m-control="typeField"
                        label="Type"
                        :required-marker="true"
                        :error="typeField.hasError()"
                        :error-message="typeField.errorMessage"
                    >
                        <m-dropdown-item
                            v-for="type of types"
                            :key="type"
                            :value="type"
                            :label="type"
                        ></m-dropdown-item>
                    </m-dropdown>
                    <br />
                </div>

                <div>
                    <h3 class="m-u--h4">Datepicker example</h3>
                    <m-datepicker
                        v-model="birthdateField.value"
                        v-m-control="birthdateField"
                        label="Birthdate"
                        min="1900-01-01"
                        max="2020-01-01"
                        :required-marker="true"
                        :error="birthdateField.hasError()"
                        :error-message="birthdateField.errorMessage"
                    ></m-datepicker>
                    <br />
                </div>

                <p class="m-u--margin-top--l m-u--margin-bottom--l">
                    <m-button type="submit">Submit</m-button>
                    <m-button type="reset" skin="secondary">Reset</m-button>
                </p>
            </m-form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@ulaval/modul-components/lib/phonefield.min.css';
import '@ulaval/modul-components/lib/rte.min.css';
import {
    MDatepicker,
    FormGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    FormControl,
    MToggleButton,
    AbstractControl,
    MButton,
    MDropdown,
    MTextfield,
    MDropdownItem,
    MForm,
} from '@ulaval/modul-components';

@Component({
    components: {
        'm-phonefield': require('@ulaval/modul-components/lib/phonefield')
            .MPhonefield,
        'm-rich-text-editor': require('@ulaval/modul-components/lib/rte')
            .MRichTextEditor,
        'm-button': MButton,
        'm-form': MForm,
        'm-datepicker': MDatepicker,
        'm-dropdown': MDropdown,
        'm-dropdown-item': MDropdownItem,
        'm-textfield': MTextfield,
    },
})
export default class EtudiantFormulaire extends Vue {
    public types: string[] = ['douce', 'blanche', 'sec'];

    public formGroup: FormGroup = new FormGroup({
        name: new FormControl<string>([
            RequiredValidator(),
            MaxLengthValidator(20),
            MinLengthValidator(2),
        ]),
        birthdate: new FormControl<string>([RequiredValidator()]),
        type: new FormControl<string>([RequiredValidator()]),
    });

    public toogleButtons: MToggleButton[] = [
        {
            id: 'id',
            title: 'title',
        },
    ];

    public get nameField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('name');
    }

    public get birthdateField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('birthdate');
    }

    public get typeField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('type');
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
