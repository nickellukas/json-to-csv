import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToCsvComponent } from './json-to-csv.component';

describe('JsonToCsvComponent', () => {
  let component: JsonToCsvComponent;
  let fixture: ComponentFixture<JsonToCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonToCsvComponent]
    });
    fixture = TestBed.createComponent(JsonToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
