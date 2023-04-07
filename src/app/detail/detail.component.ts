// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })
// export class DetailComponent {

// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DataService } from '../../../DataService';
// import axios from 'axios';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })

// export class DetailComponent implements OnInit {

//   isLoading = true;
//   detail :any;
//   constructor(
//     private route: ActivatedRoute,
//     private dataService: DataService
//   ) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const ID = params['ID'];
//       this.dataService.getById(ID).subscribe(data => {
//         this.detail = data;
//         this.isLoading = false;
//       });
//     });
//   }
//   getDataByID(ID:string){
//     this.detail =[];
//     let baseUrl = `http://localhost:8080/getsolr${ID}`;
//     axios.get(baseUrl)
//     .then((response)=>{
//       this.detail = response.data;
//       this.isLoading = false;
//     })
//     .catch(console => console.error())
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import axios from 'axios';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })
// export class DetailComponent implements OnInit {

//   detail: any={};
//   isLoading = true;

//   constructor(
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const id = params['id'];
//       this.getDataByID(id);
//     });
//   }

//   getDataByID(id: string) {
//     this.detail=[];
//     this.isLoading = true;
//     axios.get(`http://localhost:8080/getsolr/${id}`).then(
//       response => {
//         console.log(response.data); // debug statement
//         this.detail = response.data;
//         this.isLoading = false;
//       },
//       error => {
//         console.error(error);
//         this.isLoading = false;
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent   {
  httpOptions ={
    headers: new HttpHeaders({
      'Conte-Type':'application/json',
    }),
  };
  numfound:any;
  book:any[] = [];
  plant:any={};
  isLoading = true;

  constructor(private http: HttpClient,private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = params['id'];
      this.getDataByID(id)
    });
  }
  getDataByID(id:string){
    this.book =[];
    let baseUrl = `http://localhost:8080/getbyid/`+id ;
    axios.get(baseUrl)
    .then((response)=>{
      this.book = response.data.response.docs;
      this.isLoading = false;
    })
    .catch(error =>console.error(error));
  }
}
