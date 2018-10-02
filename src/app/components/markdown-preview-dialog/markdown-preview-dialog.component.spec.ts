import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPreviewDialogComponent } from './markdown-preview-dialog.component';

describe('MarkdownPreviewDialogComponent', () => {
  let component: MarkdownPreviewDialogComponent;
  let fixture: ComponentFixture<MarkdownPreviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownPreviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownPreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
