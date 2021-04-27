import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialFileUploadComponent } from './material-file-upload.component';

describe('MaterialFileUploadComponent', () => {
  let component: MaterialFileUploadComponent;
  let fixture: ComponentFixture<MaterialFileUploadComponent>;

  beforeEach(waitForAsync(() => {
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
