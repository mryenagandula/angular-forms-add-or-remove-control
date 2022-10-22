import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public form:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.formInit()
  }

  public ngOnInit(): void {
    this.form.get('workStatus').valueChanges.subscribe(value=>{
      this.selectionChange(value);
    })
  }

  public formInit(){
    this.form = this.formBuilder.group({
      firstName:['', Validators.required],
      secondName:['', Validators.required],
      middleName:[''],
      username:['', Validators.required],
      email:['', Validators.required],
      mobile:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      password:['', Validators.required],
      workStatus:['', Validators.required],
      gender:['', Validators.required],
      qualifications:[[]],
    })
  }

  public resetForm(){
    this.form.reset()
  }

  public get isExperienced(){
    const value = this.form.get('workStatus').value;
    return value && value === 'Experienced';
  }
 
  public selectionChange(value) {
    if(value && value === 'Experienced'){
      this.form.addControl('workExperience',new FormControl('',[Validators.required]));
      this.form.addControl('currentCompany',new FormControl('',[Validators.required]));
      this.form.addControl('currentCtc',new FormControl('',[Validators.required]));
      this.form.addControl('expectedCtc',new FormControl('',[Validators.required]));
      this.form.addControl('noticePeriod',new FormControl('',[Validators.required]));
      this.form.addControl('skills',new FormControl('',[Validators.required]));
    }else{
      this.form.removeControl('workExperience');
      this.form.removeControl('currentCompany');
      this.form.removeControl('currentCtc');
      this.form.removeControl('expectedCtc');
      this.form.removeControl('noticePeriod');
      this.form.removeControl('skills');
    }
  }
 
}
