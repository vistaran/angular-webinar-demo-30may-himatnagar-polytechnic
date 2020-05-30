import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface employeeResponse {
  status: string;
  data: Array<object>
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employess_list;

  constructor(
    private http: HttpClient
  ) {
    http.get(environment.apiUrl + 'employees').subscribe(
      (res: employeeResponse) => {
        console.log(res);
        this.employess_list = res.data;
      },
      (err) => {
        alert("Error when getting data.");
      }
    );
  }

  ngOnInit(): void {
  }

}
