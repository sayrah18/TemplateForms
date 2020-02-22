import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  name = 'Sarah';

  email='sayraheke1993@gmail.com';
  formValue;
  register =[];
  

  constructor() { }

  ngOnInit() {
    // setTimeout(function(){
    //   this.name="newSarah";
    // },10000);
    // setTimeout(function(){
    //   this.name="newSarah2";
    // },15000);
    // setTimeout(function(){
    //   this.name="newSarah3";
    // },20000);
  }
  onSubmit(MyForm){
    console.log(MyForm.value);
    console.log(this.email);
    this.formValue= MyForm.value;
    this.register.push(this.formValue);
    MyForm.reset();

  }


}
