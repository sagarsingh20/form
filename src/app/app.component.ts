import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 dataa = [{id: ''}];
  check=[{id:''}];
  sel=[{id:''}]
 ngOnInit(){
   
 }
  in(){
    this.dataa.push({id: ''});
   }
   inn(){
    this.check.push({id:''});
   }
   innn(){
    this.sel.push({id:''})
   }

   out(i){
     this.dataa.splice(i,1);
   }
   outt(i){
    this.check.splice(i,1);
   }
   outtt(i){
    this.sel.splice(i,1);
   }
    
  }