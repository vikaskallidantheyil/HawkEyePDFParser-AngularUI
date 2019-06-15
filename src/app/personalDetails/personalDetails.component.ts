
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personalDetails',
  templateUrl: './personalDetails.component.html',
  styleUrls: [ './personalDetails.component.css']
})
export class PersonalComponent implements OnInit {

  personalFormPI: FormGroup;
  personalFormPP: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.personalFormPI = this.formBuilder.group({
      pipurpose: [''],
      pifirstname: [''],
      pimiddlename : [''],
      pilastname : [''],
      pidob : [''],
      pinationality : [''],
      picor : [''],
      piage : [''],
      pipob : ['']
    });
    this.personalFormPP = this.formBuilder.group({
      pppurpose: [''],
      ppfirstname: [''],
      ppmiddlename : [''],
      pplastname : [''],
      ppdob : [''],
      ppnationality : [''],
      ppcor : [''],
      ppage : [''],
      pppob : ['']
    });
  }

}
