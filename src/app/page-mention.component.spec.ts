/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageMentionComponent } from './page-mention.component';

describe('PageMentionComponent', () => {
  let component: PageMentionComponent;
  let fixture: ComponentFixture<PageMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
