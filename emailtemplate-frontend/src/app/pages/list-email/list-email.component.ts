import { IEmailTemplate } from "./../../models/emailTemplate.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { EmailService } from "src/app/services/email.service";
import { Router } from "@angular/router";
import { OrderPipe } from "ngx-order-pipe";
import { PaginationFilterService } from "src/app/shared/pagination-filter.service";
import { EventService } from "src/app/services/event.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

@Component({
  selector: "app-list-email",
  templateUrl: "./list-email.component.html",
  styleUrls: ["./list-email.component.css"],
})
export class ListEmailComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  //Pagination parameters.
  p: any = 1;
  count: any = 5;

  //filter parameters
  search: string;

  //Sort parameters
  key: string = "id";
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  emails: IEmailTemplate[];
  emailEvents: any;
  data1 = [];
  isDtInitialized: boolean = false;
  // public data = [
  //   {
  //     name: "therichpost",
  //     email: "therichpost@gmail.com",
  //     website: "therichpost.com",
  //   },
  //   {
  //     name: "Donnie Grubat",
  //     email: "therichpost@gmail.com",
  //     website: "therichpost.com",
  //   },
  //   {
  //     name: "MaryGrace Grubat",
  //     email: "therichpost@gmail.com",
  //     website: "therichpost.com",
  //   },
  //   {
  //     name: "therichpost",
  //     email: "therichpost@gmail.com",
  //     website: "therichpost.com",
  //   },
  // ];

  constructor(
    private emailService: EmailService,
    private emaileventService: EventService,
    private paginationfilterService: PaginationFilterService,
    private router: Router,
    private orderPipe: OrderPipe
  ) {}

  ngOnInit(): void {
    this.emailList();
    this.dtOptions = {
      pagingType: "simple_numbers",
      pageLength: 5,
      processing: true,
    };
  }

  emailList() {
    this.emailService.findAll().subscribe((data) => {
      //this.emails = data
      //this.data = data;
      this.data1 = this.emails = data;
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.isDtInitialized = true;
        this.dtTrigger.next();
      }
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  delete(email: IEmailTemplate): void {
    this.emailService.delete(email.id).subscribe((res) => {
      this.emailList();
    });
  }

  edit(id: number) {
    this.router.navigate(["/edit", id]);
  }
}
