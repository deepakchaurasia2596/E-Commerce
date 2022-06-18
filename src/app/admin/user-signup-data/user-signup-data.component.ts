import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-user-signup-data',
  templateUrl: './user-signup-data.component.html',
  styleUrls: ['./user-signup-data.component.css'],
})
export class UserSignupDataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'password'];
  userSignedData: any;
  constructor(private _userhttp: UserApiService) {}

  ngOnInit(): void {
    this._userhttp.userDataGet().subscribe((data) => {
      this.userSignedData = data;
      // console.log(this.userSignedData);
    });
  }
}
