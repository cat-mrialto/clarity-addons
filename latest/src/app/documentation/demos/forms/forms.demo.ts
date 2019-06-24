/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { ClarityDocComponent } from "../clarity-doc";

const CODE_EXAMPLE_FULL_FORM = `
<form clrForm clrLayout="horizontal" class="clr-row">
    <clr-input-container class="clr-col-12">
        <label class="required">Input label</label>
        <input clrInput class="clr-col-2" type="text" [(ngModel)]="inputText" [ngModelOptions]="{ updateOn: 'blur' }"
            name="inputName" required minlength="5"/>
        <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>
        <clr-control-error *clrIfError="'required'">Error message about being required</clr-control-error>
        <clr-control-error *clrIfError="'minlength'">Error message about requiring 5 characters
        </clr-control-error>
    </clr-input-container>
    <clr-textarea-container class="clr-col-12">
        <label class="required">Textarea label</label>
        <textarea clrTextarea class="clr-col-2" [(ngModel)]="textareaText" name="description" [ngModelOptions]="{ updateOn: 'blur' }"
                  required></textarea>
        <clr-control-error *clrIfError="'required'">Error message about being required</clr-control-error>
    </clr-textarea-container>
    <clr-password-container class="clr-col-12">
        <label>Password label</label>
        <input clrPassword class="clr-col-2" placeholder="Password please!" type="text"
               [(ngModel)]="passwordText" [ngModelOptions]="{ updateOn: 'blur' }" name="passwordName"/>
    </clr-password-container>
    <clr-select-container class="clr-col-12">
        <label class="required">Select label</label>
        <select clrSelect class="clr-col-2" name="options" [(ngModel)]="selectOption">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
        </select>
    </clr-select-container>
    <clr-combobox class="clr-col-12 clr-row" clrControlClasses="clr-col-2" [clrAllowUserEntry]="true">
        <label class="clr-col-12 clr-col-md-2">Combobox label</label>
        <clr-options>
            <clr-option [clrValue]="'Option 1'">Option 1</clr-option>
            <clr-option [clrValue]="'Option 2'">Option 2</clr-option>
            <clr-option [clrValue]="'Option 3'">Option 3</clr-option>
            <div class="clr-no-results">No search results found</div>
        </clr-options>
    </clr-combobox>
    <clr-radio-container class="clr-col-12">
        <label class="required">Radio label</label>
        <clr-radio-wrapper>
            <input type="radio" clrRadio name="options" value="1" required [(ngModel)]="radioOption"/>
            <label>Option 1</label>
        </clr-radio-wrapper>
        <clr-radio-wrapper>
            <input type="radio" clrRadio name="options" value="2" required [(ngModel)]="radioOption"/>
            <label>Option 2</label>
        </clr-radio-wrapper>
        <clr-control-helper>Helper text</clr-control-helper>
        <clr-control-error>This field is required!</clr-control-error>
    </clr-radio-container>
    <clr-date-container class="clr-col-12">
        <label>Date label</label>
        <input type="text" [(ngModel)]="date" [ngModelOptions]="{ updateOn: 'blur' }" name="date" clrDate>
    </clr-date-container>
    <clr-input-container class="clr-col-12">
        <label>Time label</label>
        <input type="time" [(ngModel)]="time" [ngModelOptions]="{ updateOn: 'blur' }" name="time" clrInput>
    </clr-input-container>
    <clr-date-time-container class="clr-col-12 clr-row">
        <clr-date-container>
            <label>Date & time label</label>
            <input clrDate type="text" [(ngModel)]="date" [ngModelOptions]="{ updateOn: 'blur' }" name="date">
        </clr-date-container>
        <input type="time" [(ngModel)]="time" [ngModelOptions]="{ updateOn: 'blur' }" name="time" clrTime>
    </clr-date-time-container>
    <clr-input-container class="clr-col-12">
        <label>Money label</label>
        <input clrInput clrNumeric class="clr-col-2" type="text" [(clrNumericValue)]="money" clrUnit="€"/>
    </clr-input-container>
    <clr-checkbox-container class="clr-col-12">
        <label>Checkbox label</label>
        <clr-checkbox-wrapper>
            <label class="clr-col-12">Option</label>
            <input clrCheckbox type="checkbox" [(ngModel)]="checkboxValue" name="checkboxName"/>
        </clr-checkbox-wrapper>
    </clr-checkbox-container>
    <clr-toggle-container class="clr-col-12">
        <label>Toggle label</label>
        <clr-toggle-wrapper>
            <input type="checkbox" id="toggle" name="toggle" [(ngModel)]="toggleValue" clrToggle />
            <label for="toggle" class="clr-col-none"></label>
        </clr-toggle-wrapper>
    </clr-toggle-container>
    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data" [ngModelOptions]="{ updateOn: 'blur' }"
        clrRequiredAllMultilang clrControlClasses="clr-col-2" name="template">

        <label class="required">Multilingual Input</label>
        <clr-control-error>Please translate in every language!</clr-control-error>
        <clr-control-helper>Helper text</clr-control-helper>
    </clr-multilingual-input>
    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2" [ngModelOptions]="{ updateOn: 'blur' }"
        clrRequiredAllMultilang clrControlClasses="clr-col-2" name="template2">

        <label class="required">Multilingual Input</label>
        <clr-control-error>Please translate in every language!</clr-control-error>
        <clr-control-helper>Helper text</clr-control-helper>
    </clr-multilingual-textarea>
</form>
`;

const CODE_EXAMPLE_FORM_SUBMIT = `
<form ... (submit)="onFormSubmit()">
    ...
    <input type="submit" style="display: none"> <!-- Not needed, if you already have a submit button-->
</form>
`;

const CODE_EXAMPLE_FORM_SUBMIT_BLUR = `
onFormSubmit() {
    (<HTMLElement>document.activeElement).blur();
    ...
}
`;

const CODE_EXAMPLE_RO_HORIZONTAL = `
<form clrForm [clrLayout]="'horizontal'" class="clr-row">
    <div class="clr-col-12 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">First name</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>
    </div>

    <div class="clr-col-12 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Lastname</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>
    </div>
</form>
`;

const CODE_EXAMPLE_RO_HORIZONTAL2 = `
<form clrForm [clrLayout]="'horizontal'" class="clr-row">
    <div class="clr-col-6 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">First name</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>
    </div>
    <div class="clr-col-6 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">Last name</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>
    </div>
    <div class="clr-col-6 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Email</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">john.doe@mail.com</span>
    </div>
    <div class="clr-col-6 clr-form-control clr-row">
        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Phone</label>
        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">1234567890123</span>
    </div>
</form>
`;

const CODE_EXAMPLE_RO_VERTICAL = `
<form clrForm [clrLayout]="'vertical'">
    <div class="clr-form-control">
        <label class="clr-control-label">First name</label>
        <span>John</span>
    </div>
    <div class="clr-form-control">
        <label class="clr-control-label">Lastname</label>
        <span>Doe</span>
    </div>
</form>
`;

const CODE_EXAMPLE_RO_VERTICAL2 = `
<form clrForm [clrLayout]="'vertical'" class="clr-row">
    <div class="clr-form-control clr-col-6">
        <label class="clr-control-label">First name</label>
        <span>John</span>
    </div>
    <div class="clr-form-control clr-col-6">
        <label class="clr-control-label">Lastname</label>
        <span>Doe</span>
    </div>
    <div class="clr-form-control clr-col-6">
        <label class="clr-control-label">Email</label>
        <span>john.doe@mail.com</span>
    </div>
    <div class="clr-form-control clr-col-6">
        <label class="clr-control-label">Phone</label>
        <span>1234567890123</span>
    </div>
</form>
`;

@Component({
    selector: "clr-forms-demo",
    templateUrl: "./forms.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class FormsDemo extends ClarityDocComponent {
    codeExampleFullForm = CODE_EXAMPLE_FULL_FORM;
    codeExampleFormSubmit = CODE_EXAMPLE_FORM_SUBMIT;
    codeExampleFormSubmitBlur = CODE_EXAMPLE_FORM_SUBMIT_BLUR;
    codeExampleROHorizontal = CODE_EXAMPLE_RO_HORIZONTAL;
    codeExampleROHorizontal2 = CODE_EXAMPLE_RO_HORIZONTAL2;
    codeExampleROVertical = CODE_EXAMPLE_RO_VERTICAL;
    codeExampleROVertical2 = CODE_EXAMPLE_RO_VERTICAL2;
    inputText: string;
    textareaText: string;
    passwordText: string;
    toggleValue: boolean;
    checkboxValue: boolean;
    date: string;
    time: string;
    money: number;
    radioOption: string;
    selectOption: string;
    isDisabled: boolean;
    data = new Map();
    data2 = new Map();

    inputTextSubmit: string;
    submittedText: string;

    constructor() {
        super("forms");
        this.data.set("EN", "english text");
        this.data.set("DE", "deutscher text");
        this.data.set("FR", "texte français");
        this.data2.set("EN", "english text");
        this.data2.set("DE", "deutscher text");
        this.data2.set("FR", "texte français");
    }

    onFormSubmit() {
        this.submittedText = this.inputTextSubmit;
    }
}
