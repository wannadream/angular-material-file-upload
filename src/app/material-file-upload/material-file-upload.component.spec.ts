import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFileUploadComponent } from './material-file-upload.component';

describe('MaterialFileUploadComponent', () => {
  let component: MaterialFileUploadComponent;
  let fixture: ComponentFixture<MaterialFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
