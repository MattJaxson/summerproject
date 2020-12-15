import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';


import { PersonalInfoPage } from './personal-info.page';
import { JwtHelperService } from '@auth0/angular-jwt';


describe('Signup - Persnonal Info', () => {
  let jwtHelper;
  let component: PersonalInfoPage;
  let fixture: ComponentFixture<PersonalInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule
      ],
      providers: [
        {provide: JwtHelperService, useValue: jwtHelper}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should created and Initiated via ngOnInit', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });

  // tslint:disable-next-line: max-line-length
  it('should have a FormGroup named userInfoForm, initialized with controls fullName, phone, gender, date of birth, school, and grade, which all have empty values', () => {
    expect(component.userInfoForm).toBeTruthy();
    expect(component.userInfoForm.value.fullName).toBe('');
    expect(component.userInfoForm.value.phone).toBe('');
    expect(component.userInfoForm.value.gender).toBe('');
    expect(component.userInfoForm.value.dob).toBe('');
    expect(component.userInfoForm.value.school).toBe('');
    expect(component.userInfoForm.value.grade).toBe('');
  });

  it('should have a submit button with the goToProfilePicturePage() method', () => {
    expect(component.goToProfilePicturePage).toBeDefined();
  });

  it('cancel button should exist and takes the user back to the login page', () => {

    const cancelButton = fixture.debugElement.nativeElement.querySelector('#cancel-button');
    expect(cancelButton).toBeTruthy();

    fixture.whenStable();

    let routerSpy = { navigate: jasmine.createSpy('navigate') };

    spyOn(component, 'cancel').and.callFake(() => {
      console.log('Sign up cancelled');
      this.router.navigate(['/home']);
    });

    // expect (routerSpy.navigate).toHaveBeenCalledWith(['']);
    // Expect method to go to next page
  });


});
