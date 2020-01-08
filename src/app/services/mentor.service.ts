import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MentorsService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getMentors() {
    console.log('Getting Jobs');
    return this.http.get(`${this.BACKEND_URL}/api/mentors`);
  }

  sendMentorAnEmail(
    message,
    mentorName,
    mentorEmail,
    studentEmail,
    studentName,
    studentCity,
    studentState,
    studentAge,
    studentGrade,
    studentSchool,
    studentProfilePic,
    studentResume
  ) {

    console.log(`Sending email to ${mentorEmail}`);
    return this.http.post(`${this.BACKEND_URL}/api/mentors/mentor-message`, {
      message,
      mentorName,
      mentorEmail,
      studentEmail,
      studentName,
      studentCity,
      studentState,
      studentAge,
      studentGrade,
      studentSchool,
      studentProfilePic,
      studentResume
    });
  }
}

