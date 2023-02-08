import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {  Student } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }
  //add Students
  addStudent(student : Student){
    student.id = this.afs.createId();
    return this.afs.collection('/Student').add(student);
  }

  //get all students
  getAllStudents(){
    return this.afs.collection('/Student').snapshotChanges();
  }

  //delete students
  deleteStudent(student : Student){
    return this.afs.doc('/Student/'+student.id).delete();
  }

  //update Student
  updateStudent(student : Student){
    this.deleteStudent(student);
    this.addStudent(student);
  }
}