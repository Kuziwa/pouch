import { Component, OnInit } from '@angular/core';
 import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DbService } from 'src/app/db.service';
import * as pdfObject from 'pdfobject'
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finance', 
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
 // bread crumb items
 breadCrumbItems: Array<{}>;
 files: File[] = [];
 uploadPercent: Observable<number>;
 downloadURL: Observable<string>;
 myFiles: any=[];
 showDetailForm: boolean=false;
 showFile: boolean=false;
 showList: boolean=true;

 newDocument: any = {};
  selectedDepartment: any="";
  updatedFiles: any=[];

 constructor(private storage: AngularFireStorage, private db: AngularFirestore,
            private dbs: DbService, private route:Router) { }

 public processFiles(e){
   console.log(e); 
 }

 public setDepartment(){
   console.log(this.newDocument.department);
   this.selectedDepartment=this.newDocument.department;
 }
 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form File Upload', active: true }];
     this.dbs.collection$('files').subscribe(data=>{
      data.forEach(file=>{
        if (file['updated']==true){
          this.updatedFiles.push(file)
        }else{
          this.myFiles.push(file)
        }
      })
     //this.myFiles=data
     console.log(this.myFiles); 
     console.log(this.updatedFiles); 
    
   })
 }

 public backToList(){
   this.showFile=false;
   this.showDetailForm = false;
   this.showList=true;
 }
 public openFile(file){
   pdfObject.embed(file.downloadURL, "#mypdf");
   this.showFile=true;
   this.showDetailForm = true;
   this.showList=false;
   this.newDocument=file;
 }
 saveFile(){
   this.newDocument.updated = true;
    this.dbs.updateAt('files',this.newDocument);
    this.showDetailForm =false;
    this.showFile =false;
    this.showList =true;
 }
 onSelect(event) {
   console.log(event);
   this.files.push(...event.addedFiles);

   const formData = new FormData();

   for (var i = 0; i < this.files.length; i++) { 
     //formData.append("file[]", this.files[i]);
     const file = this.files[i];
     console.log(this.files[i]);
     
      const filePath = 'uploads/'+file.name;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

     // observe percentage changes
     this.uploadPercent = task.percentageChanges();
     // get notified when the download URL is available
     task.snapshotChanges().pipe(
         finalize(async () => { 
           // console.log(this.downloadURL.toPromise());
           console.log('Send data to base');
           this.downloadURL = await ref.getDownloadURL().toPromise();
           console.log(this.downloadURL);

       // this.db.collection('files').add( { downloadURL: this.downloadURL, filePath });
       this.dbs.updateAt('files', { downloadURL: this.downloadURL, filePath })

         })
     )
     .subscribe(data=>{
       
       console.log(data);
       
     })
   } 

   // this.http.post('http://localhost:8001/upload.php', formData)
   // .subscribe(res => {
   //    console.log(res);
   //    alert('Uploaded Successfully.');
   // })
 
}

onRemove(event) {
   console.log(event);
   this.files.splice(this.files.indexOf(event), 1);
}
}
