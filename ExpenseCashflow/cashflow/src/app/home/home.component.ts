import { Component, inject } from '@angular/core';
import { CashflowService } from '../cashflow.service';
import {Router} from '@angular/router';
import { TaskModel } from '../cashflow';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  ExpenseService = inject(CashflowService)
  expenses: TaskModel[] = [];
  totalExpense: number = 0;
  ngOnInit(){
    this.ExpenseService.getAll().subscribe((result)=>{
      this.expenses = result
      console.log(result)
      this.calculateTotalExpense();
    })
  }
  displayedColumns: string[] = ['Id', 'Description', 'Category', 'Date', 'Actions']

  e(Id: number) {
    console.log("Edit", Id)
    this.router.navigateByUrl("edit/"+ Id)
  };
  d(Id: number) {
    console.log("Details", Id)
    this.router.navigateByUrl("details/"+ Id)
  };
  dl(Id: number) {
    console.log("Delete", Id)
    this.router.navigateByUrl("delete/"+ Id)
  };
  calculateTotalExpense() {
    this.totalExpense = this.expenses.reduce((total, expense) => total + expense.amount, 0);
}
}
