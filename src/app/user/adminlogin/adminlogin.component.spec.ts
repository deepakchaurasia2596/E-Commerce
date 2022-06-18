import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AdminCredentialsService } from 'src/app/Services/admin-credentials.service';

import { AdminloginComponent } from './adminlogin.component';

class MockFetchData {
  adminCredential() {
    let adminCred = [
      {
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin',
      },
    ];
    return of(adminCred);
  }
}

describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminloginComponent],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [
        AdminloginComponent,
        { provide: AdminCredentialsService, useClass: MockFetchData },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check adminform data ', () => {
    component.adminFormData();
    expect(component.adminFormData).not.toEqual('');
  });
});
