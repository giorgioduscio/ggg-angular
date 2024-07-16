import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { ListService } from '../../services/list.service';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { List } from '../../interfaces/list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,  
    NgFor,  
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent{
  @ViewChild('formData') formData! :NgForm

  // VISUALIZZA
  todos :List[] =[]
  constructor(private list:ListService){  
    list.getTodo().subscribe((responce:any)=>{
      this.todos =Object.keys(responce) .map(key=>{
        responce[key]["id"] =key
        return responce[key]
      }) 
      console.log("VISUALIZZA", this.todos);
    })
  }

  // AGGIUNGE
  submit(formData:NgForm){
    const newTitle :string =formData.value.title

    this.list.addTodo({
      complete: false,
      title: newTitle,
    })
    .subscribe(responce=>{ console.log("AGGIUNGE", responce) })
  }

  // ELIMINA
  delete(index:number){
    const id =this.todos[index].id
    this.list.deleteTodo(id!)
    .subscribe(responce =>console.log("ELIMINA", responce))
  }

  // PATCH
  patch(event:Event, todo:List){
    const {value, id, checked} =(event.target as HTMLInputElement)
    const newField =id=='complete' ?checked :value

    this.list.patchTodo(todo.id!,{
      complete: todo.complete,
      title: todo.title,
      [id]: newField,
    }).subscribe(responce =>console.log("PATCH", `[${id}]: ${newField}`))
    
    
  }

}