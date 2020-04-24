import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  myform:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myform =this.fb.group({
      "title":[''],
      'firstName':[''],
      'lastName':[''],
      'email':[''],
      'password':[''],
      'confirmPassword':[''],
      'acceptTerms': [false]
    })
  }
  onSubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myform.value, null, 4))
  }
  get f() { return this.myform.controls; }

}
