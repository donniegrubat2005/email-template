import { QuillModule } from "ngx-quill";
import { Component, OnInit, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailService } from "src/app/services/email.service";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Quill from "quill";
import { EventService } from "src/app/services/event.service";
import { IEmailTemplate } from "src/app/models/emailTemplate.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-create-email",
  templateUrl: "./create-email.component.html",
  styleUrls: ["./create-email.component.css"],
})
export class CreateEmailComponent implements OnInit {
  public editor;
  emailForm: FormGroup;
  emails: IEmailTemplate[];
  emailEvents: any[];
  filterEmailVariables: any[];
  emailVariables: any[];

  today: number = Date.now();
  datedata: any;

  quill: any;

  modules = {
    toolbar: "#toolbar",
  };

  editorStyle = {
    height: "200px",
  };

  constructor(
    private emailService: EmailService,
    private emaileventService: EventService,
    private fb: FormBuilder,
    private router: Router,
    private elem: ElementRef
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
    this.editor = this.quill;
    console.log((this.editor = this.quill));
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
      createdBy: ["Donnie"],
      createdDate: [""],
    });
    this.emailList();
    //this.emailEventList();
    //this.emailVariableList();
  }

  ngAfterViewInit() {}

  // testdropdownvalue(value) {
  //   console.log(value);
  //   this.emailForm.controls["body"].setValue(
  //     this.emailForm.controls["body"].value + value
  //   )};
  // const cursorPosition = this.quill.getSelection().index;
  // this.quill.insertText(cursorPosition, value);
  // this.quill.setSelection(cursorPosition + value.length);

  emailEventList() {
    this.emaileventService.getEvents().subscribe((data) => {
      this.emailEvents = data;
    });
  }

  emailVariableList() {
    this.emaileventService.getVariables().subscribe((data) => {
      this.emailVariables = data;
    });
  }

  emailList() {
    this.emailService.findAll().subscribe((data) => {
      this.emails = data;
    });
  }

  filterEmailTemplateByEventId(filterVal: any) {
    this.filterEmailVariables = this.emailVariables.filter(
      (item) => item.eventId == filterVal
    );
    console.log(
      this.emailVariables.filter((item) => item.eventId == filterVal)
    );
  }

  onSubmit() {
    this.emailService.save(this.emailForm.value).subscribe(
      (result) => this.returntoEmailList(),
      (error) => console.log(error)
    );
  }

  returntoEmailList() {
    this.router.navigate(["/emaillist"]);
  }
}
