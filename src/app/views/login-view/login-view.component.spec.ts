import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginViewComponent } from './login-view.component';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../../services/local-storage.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const storage = {
  username: 'test_name',
  password: 'test_password'
};
const LocalStorageServiceStub = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  },
  setStorageSecurityDef: (varName, varVal) => {
    storage[varName] = varVal;
  },
  ready: new BehaviorSubject(true)
};

fdescribe('LoginViewComponent', () => {
  let component: LoginViewComponent;
  let fixture: ComponentFixture<LoginViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginViewComponent
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial credentials', () => {
    component.ngOnInit();

    expect(component.username).toEqual('test_name');
    expect(component.password).toEqual('test_password');
  });
});
