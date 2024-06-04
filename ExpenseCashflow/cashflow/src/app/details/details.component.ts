import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { TaskModel } from '../cashflow';
import { CashflowService } from '../cashflow.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  expense: TaskModel={
    id: 0,
    description: "string",
    amount: 0,
    date: new Date(),
    dateAdded: new Date(),
    categoryId: 0,
    category: {
        id: 0,
        categoryName: "string"
    }
  }

  serviceExpenseTracker = inject(CashflowService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    console.log('ID from route parameters:', this.activatedRoute.snapshot.params["id"]);
    this.serviceExpenseTracker.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result=>{
      this.expense = result;
      console.log('Expense data:', this.expense);
  });
  }
}
