import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

describe('AppComponent', () => {

  let storageSpy, authSpy, jwtHelper;

  beforeEach(waitForAsync(() => {
    storageSpy = jasmine.createSpyObj('jwtHelper', { get: 'sdsds'});
    // storageSpy = jasmine.createSpyObj('JwtHelperService', { get: 'sdsds'});
    authSpy = jasmine.createSpyObj('AuthService', {
      authenticationState: 'asdasd'
    });


    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        AuthService,
        { provide: Storage, useValue: storageSpy },
        { provide: JwtHelperService, useValue: jwtHelper }
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check for a JWT on the devices Storage via Ionic Storage', async () => {
    TestBed.createComponent(AppComponent);
    expect(storageSpy.get).toHaveBeenCalled();
  });


  it('should check for the authentication state, should be defined as FALSE', async () => {
    TestBed.createComponent(AppComponent);
    expect(authSpy.authenticationState).toBeDefined();
  });


  // TODO: add more tests!

});
