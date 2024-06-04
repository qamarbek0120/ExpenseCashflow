import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TaskModel } from './cashflow';

@Injectable({
  providedIn: 'root'
})
export class CashflowService {
  httpClient = inject(HttpClient)

  constructor() { }
  getAll(){
    return this.httpClient.get<TaskModel[]>("https://localhost:7200/api/Expenses/GetFlows" )
  }
  getById(id: number){
    return this.httpClient.get<TaskModel>(`https://localhost:7200/api/Expenses/GetExpense/${id}`)
  }
  getAllCategories(){
    return this.httpClient.get("https://localhost:7200/api/Categories/GetCategories/")
  }
  createExpense(expense: TaskModel){
    return this.httpClient.post("https://localhost:7200/api/Expenses/PostExpense", expense)
  }
  edit(expense: TaskModel){
    return this.httpClient.put("https://localhost:7200/api/Expenses/PutExpense", expense)
  }
  delete(id: number){
    return this.httpClient.delete(`https://localhost:7200/api/Expenses/DeleteExpense/${id}`)
  }
}
