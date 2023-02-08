import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Student } from '../shared/store.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentsList:Student []=[];
  studentObj:Student={
    id:'',
    Name:'',
    Age:'',
    Gender:'',
    Mobilenumber:'',
    mail:'',
    Degree:'',
    Experience:'',
    Work:''

  };
  id:string='';
  Name: string='';
  Age:string='';
  Gender:string='';
  Mobilenumber:string='';
  mail:string='';
  Degree:string='';
  Experience:string='';
  Work:any='';

  constructor( private auth:AuthService,private data:DataService) { }
  file:any;
  getFile(event:any){
    this.file=event.target.file[0];

    console.log('file',this.file);
  }

  ngOnInit(): void {
    this.getAllStudents();
  }
  tb(){
  if(this.Name=='')
  {alert('please enter name');
   return;
  }
  if(this.Age=='')
  {alert('please enter age');
   return;
  }
  if(this.Gender=='')
  {alert('please enter gender');
   return;
  }
  if(this.Mobilenumber=='')
  {alert('please enter mobno');
   return;
  }
  if(this.mail=='')
  {alert('please enter mailid');
   return;
  }
  if(this.Degree=='')
  {alert('please enter degree');
   return;
  }
  if(this.Experience=='')
  {alert('please enter experience');
   return;
  }
  if(this.Work=='')
  {alert('please enter work');
   return;
  }
  this.Name='';
  this.Age='';
  this.Gender='';
  this.Mobilenumber='';
  this.mail='';
  this.Degree='';
  this.Experience='';
  this.Work='';
}
getAllStudents(){
  this.data.getAllStudents().subscribe(res=>{
    this.studentsList = res.map((e:any)=>{
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    })
  },err=>{
    alert('Error while Fetching data');
  })
}

resetForm(){
  this.id = '';
  this.Name='';
  this.Age='';
  this.Gender='';
  this.Mobilenumber='';
  this.mail='';
  this.Degree='';
  this.Experience='';
  this.Work='';
}

addStudent(){
  if(this.id||this.Name==''||this.Age==''||this.Gender==''||this.Mobilenumber==''||this.mail==''||this.Degree==''||this.Experience==''||this.Work==''){
    alert('Fill all Input Field');
    return;
  }
  else{
    alert('SucessFully registered');
  }

  this.studentObj.id = '';
  this.studentObj.Name = this.Name;
  this.studentObj.Age = this.Age;
  this.studentObj.Gender = this.Gender;
  this.studentObj.Mobilenumber = this.Mobilenumber;
  this.studentObj.mail = this.mail;
  this.studentObj.Degree = this.Degree;
  this.studentObj.Experience = this.Experience;
  this.studentObj.Work = this.Work;
 

  this.data.addStudent(this.studentObj);
  this.resetForm();
}

updateStudent(){

}

deleteStudent(student : Student){
  if(window.confirm('Are you Sure you Want to delete'+ student.Name +''+student.Work+'')){
    this.data.deleteStudent(student);
  }
}
}


