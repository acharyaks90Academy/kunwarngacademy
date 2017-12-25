import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'; 
import {  CustomValidators} from './custom.validators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  statusList = ['Stable', 'Critical', 'Finished'];
  constructor(){
    
  }
  ngOnInit(){
    this.initForm();
  }

  private initForm() {
    this.projectForm = new FormGroup({
      project: new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      mail: new FormControl(null, [ Validators.required, Validators.email]),
      status: new FormControl('Critical')
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

}
