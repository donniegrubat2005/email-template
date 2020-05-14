import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailService } from "src/app/services/email.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-edit-email",
  templateUrl: "./edit-email.component.html",
  styleUrls: ["./edit-email.component.css"],
})
export class EditEmailComponent implements OnInit {
  emailForm: FormGroup;
  quill: any;

  modules = {
    toolbar: "#toolbar",
  };

  editorStyle = {
    height: "200px",
  };

  constructor(
    private emailService: EmailService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSelectionChanged = (event) => {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  };

  onContentChanged = (event) => {
    //console.log(event.html);
  };

  onFocus = () => {
    console.log("On Focus");
  };
  onBlur = () => {
    console.log("Blurred");
  };

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      body: ["", Validators.required],
      variables: ["", Validators.required],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let getId = parseInt(params.get("id"));
      if (getId) {
        this.getEmail(getId);
      }
    });
  }

  ngAfterViewInit() {}

  getEmail(id: number) {
    this.emailService.getEmailId(id).subscribe(
      (data) => {
        this.emailForm.patchValue(data);
        //console.log(this.emailForm.value.account_name = data)
      },
      (error) => {
        alert(error);
      }
    );
  }

  onSubmit() {
    this.emailService.update(this.emailForm.value).subscribe((email) => {
      email = email;
      this.returnToEmailList(), (error) => console.log(error);
    });
  }

  returnToEmailList() {
    this.router.navigate(["/emaillist"]);
  }
}
