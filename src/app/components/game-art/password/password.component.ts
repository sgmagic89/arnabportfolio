import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  pass="";
  showError = false;
  constructor(public dialogRef: MatDialogRef<PasswordComponent>, private dataService: DataService) { }

  ngOnInit() {
  }

  submit() {
    if(this.dataService.getPassword() === this.pass) {
      this.dialogRef.close(true);
    } else {
      this.showError = true;
    }
  }

  hideError() {
    this.showError = false;
  }

}
