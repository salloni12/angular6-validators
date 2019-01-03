import { Component, OnInit } from '@angular/core';

import { FormBuilder,  Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  register: FormGroup;
  isSubmitted:boolean=false;
  result:any=null;

  constructor(private frmbuilder: FormBuilder) { }

  ngOnInit() {
    this.register=this.frmbuilder.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]]

    });

  }


  get name(){return this.register.get('name');}
  get email(){return this.register.get('email');}
  get password(){return this.register.get('password');}

  save(){
    this.isSubmitted=true;
    if(!this.register.valid)
      return;

    this.result=this.register.value;
    setTimeout(()=>{
      this.result=null;
      this.reset();
  
    },2000)
  }

  reset(){
    this.isSubmitted=false;
    this.register.reset();
  }
}
