import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { PersonalDetailsService } from "./personal-details.service";

@Component({
  selector: "app-personalDetails",
  templateUrl: "./personalDetails.component.html",
  styleUrls: ["./personalDetails.component.css"]
})
export class PersonalComponent implements OnInit {
  personalFormPI: FormGroup;
  personalFormPP: FormGroup;

  image = "assets/demo.jpeg";
  formData = new FormData();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: PersonalDetailsService
  ) {}

  ngOnInit() {
    this.formData.append("file", this.image);
    this.personalFormPI = this.formBuilder.group({
      pipurpose: [""],
      pifirstname: [""],
      pimiddlename: [""],
      pilastname: [""],
      pidob: [""],
      pinationality: [""],
      picor: [""],
      piage: [""],
      pipob: [""]
    });
    this.personalFormPP = this.formBuilder.group({
      pppurpose: [""],
      ppfirstname: [""],
      ppmiddlename: [""],
      pplastname: [""],
      ppdob: [""],
      ppnationality: [""],
      ppcor: [""],
      ppage: [""],
      pppob: [""]
    });
    this.getImageResult();
  }

  getImageResult() {
    this.service
      .getImageData(this.formData)
      .subscribe(data => console.log(data));
  }
}
