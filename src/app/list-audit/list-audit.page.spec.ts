import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAuditPage } from './list-audit.page';

describe('ListAuditPage', () => {
  let component: ListAuditPage;
  let fixture: ComponentFixture<ListAuditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAuditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
