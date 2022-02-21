import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms'

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // submitted:boolean = false;

  public login = this.fb.group({
    loginEmail :[null,
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ],
    loginPassword : [null ,Validators.required]
  })

  register = new FormGroup({
    fullName : new FormControl(null,),
    userName : new FormControl(null,),
    registerEmail : new FormControl(null,),
    registerPassword : new FormControl(null,),
    registerConfirmPassword : new FormControl(null,)
  })

  get loginEmail(){
    return this.login.get('loginEmail') 
  }

  get loginPassword(){
    return this.login.get('loginPassword') 
  }


  submitLogin(){
    console.log(this.login.value)
  }

  // love = "alright"
  // kiss = "kiss"
  // win = "win"
}
