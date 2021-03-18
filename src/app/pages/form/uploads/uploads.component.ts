import { Component, OnInit } from '@angular/core';
import { DropdownsComponent } from '../../ui/dropdowns/dropdowns.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DbService } from 'src/app/db.service';
import * as pdfObject from 'pdfobject'
import { Router } from '@angular/router';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})

/**
 * Form uploads component
 */
export class UploadsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  files: File[] = [];
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  myFiles: any;
  showDetailForm: boolean = false;
  showFile: boolean = false;
  showList: boolean = true;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore,
    private dbs: DbService, public route: Router) { }

  public processFiles(e) {
    console.log(e);
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form File Upload', active: true }];
    this.dbs.collection$('files').subscribe(data => {
      this.myFiles = data
      console.log(this.myFiles);

    })
  }

  public backToList() {
    this.showFile = false;
    this.showDetailForm = false;
    this.showList = true;
  }
  public openFile(file) {
    pdfObject.embed(file.downloadURL, "#mypdf");
    this.showFile = true;
    this.showDetailForm = true;
    this.showList = false;
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    let uploadsComplete = false
    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      //formData.append("file[]", this.files[i]);
      const file = this.files[i];
      console.log(this.files[i]);

      const filePath = 'uploads/' + file.name;
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
            .then(() => { 
              alert('Uploads complete. View uploaded files')
                this.route.navigateByUrl('finance');
                 
            })
        })
      )
        .subscribe()
    }


    // this.http.post('http://localhost:8001/upload.php', formData)
    // .subscribe(res => {
    //    console.log(res);
    //    alert('Uploaded Successfully.');
    // })


  }

  public viewUploadedFiles(){
    this.route.navigateByUrl('finance')
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
