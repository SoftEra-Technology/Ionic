import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloseAuditPage } from './close-audit.page';

describe('CloseAuditPage', () => {
  let component: CloseAuditPage;
  let fixture: ComponentFixture<CloseAuditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAuditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloseAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
