import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloGeorgeComponent } from './hello-george.component';

describe('HelloGeorgeComponent', () => {
  let component: HelloGeorgeComponent;
  let fixture: ComponentFixture<HelloGeorgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloGeorgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloGeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
