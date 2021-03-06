/*
 * Copyright (c) 2018-2020 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ClarityModule,
  ClrPopoverToggleService,
  ɵba as LayoutService,
  ɵbb as NgControlService,
  ɵbd as IfErrorService,
  ɵbc as ControlClassService,
  ɵe as POPOVER_HOST_ANCHOR,
  ɵp as AbstractPopover,
  ɵz as ControlIdService,
  ɵi as DropdownFocusHandler,
  ɵo as FocusableItem,
  ɵb as RootDropdownService,
  ɵj as DROPDOWN_FOCUS_HANDLER_PROVIDER,
  ɵh as FOCUS_SERVICE_PROVIDER,
  ɵd as ROOT_DROPDOWN_PROVIDER,
} from '@clr/angular';
import { ClrComboboxModule } from './combobox.module';
import { ClrOption } from './option';
import { MobileBehaviourMode } from './utils/mobile-behaviour-mode';

@Component({
  template: `
    <clr-combobox
      class="clr-col-12"
      [clrPreselectedValue]="'Option 3'"
      (clrSelectedOption)="selectedOption = $event"
      (clrEnteredValue)="enteredValue = $event"
      [clrMobileBehaviourMode]="mobileBehaviourMode"
      [clrAllowUserEntry]="allowUserEntry"
    >
      <label>Preselected value</label>
      <clr-options>
        <clr-option [clrValue]="'Option 1'">Option 1</clr-option>
        <clr-option [clrValue]="'Option 2'">Option 2</clr-option>
        <clr-option [clrValue]="'Option 3'">Option 3</clr-option>
        <div class="clr-no-results">No search results found</div>
      </clr-options>
      <clr-control-error>Select a value</clr-control-error>
    </clr-combobox>
  `,
})
class TestComponent {
  selectedOption: ClrOption<string>;
  enteredValue: string;
  mobileBehaviourMode: MobileBehaviourMode = MobileBehaviourMode.DEFAULT;
  allowUserEntry = false;
}

describe('ComboboxComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let selectEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule, ClrComboboxModule],
      declarations: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    inputEl = fixture.debugElement.query(By.css('.clr-input-wrapper'));
    selectEl = fixture.debugElement.query(By.css('.clr-select-wrapper'));
    fixture.detectChanges();
  });

  function selectIsShown(): boolean {
    return (
      inputEl.nativeElement.classList.contains('hidden-sm') && selectEl.nativeElement.classList.contains('visible-sm')
    );
  }

  it('Preselect option', fakeAsync(() => {
    // Need to fake an async test here because the value gets emitted within a setTimeout.
    tick(500);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(fixture.componentInstance.selectedOption.value).toBe('Option 3');
    });
  }));

  it('Select element shown by default - user entries allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.DEFAULT;
    fixture.componentInstance.allowUserEntry = false;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(true);
  });

  it('Select element shown by default - user entries not allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.DEFAULT;
    fixture.componentInstance.allowUserEntry = true;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(false);
  });

  it('Select element shown when forced select - user entries not allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.FORCE_SELECT;
    fixture.componentInstance.allowUserEntry = false;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(true);
  });

  it('Select element shown when forced select - user entries allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.FORCE_SELECT;
    fixture.componentInstance.allowUserEntry = true;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(true);
  });

  it('Select element not shown when forced autocomplete - user entries not allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.FORCE_AUTOCOMPLETE;
    fixture.componentInstance.allowUserEntry = false;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(false);
  });

  it('Select element not shown when forced autocomplete - user entries allowed', () => {
    fixture.componentInstance.mobileBehaviourMode = MobileBehaviourMode.FORCE_AUTOCOMPLETE;
    fixture.componentInstance.allowUserEntry = true;
    fixture.detectChanges();

    expect(selectIsShown()).toBe(false);
  });

  it('check correct obfuscated imports', () => {
    expect(new ControlIdService().constructor.name).toBe('ControlIdService');
    expect(new LayoutService().constructor.name).toBe('LayoutService');
    expect(new ControlClassService(new LayoutService()).constructor.name).toBe('ControlClassService');
    expect(new NgControlService().constructor.name).toBe('NgControlService');
    expect(new IfErrorService(new NgControlService()).constructor.name).toBe('IfErrorService');
    expect(AbstractPopover.toString()).toContain('AbstractPopover');
    expect(POPOVER_HOST_ANCHOR.toString()).toContain('POPOVER_HOST_ANCHOR');
    expect(new RootDropdownService().constructor.name).toBe('RootDropdownService');
    expect(new DropdownFocusHandler(null, null, null, new ClrPopoverToggleService(), null, null).constructor.name).toBe(
      'DropdownFocusHandler'
    );
    expect(FocusableItem.toString()).toContain('FocusableItem');
    expect(Object.keys({ ROOT_DROPDOWN_PROVIDER })[0]).toBe('ROOT_DROPDOWN_PROVIDER');
    expect(Object.keys({ DROPDOWN_FOCUS_HANDLER_PROVIDER })[0]).toBe('DROPDOWN_FOCUS_HANDLER_PROVIDER');
    expect(Object.keys({ FOCUS_SERVICE_PROVIDER })[0]).toBe('FOCUS_SERVICE_PROVIDER');
  });
});
