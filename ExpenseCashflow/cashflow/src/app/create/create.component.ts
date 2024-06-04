import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CashflowService } from '../cashflow.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  serviceExpenseTracker = inject(CashflowService)
  router = inject(Router)
  categories:any

  expenseToCreate: any = {
    description:"",
    amount:1,
    categoryId:0
  }
  selectedCategoryId: number=0

  ngOnInit(){
    this.serviceExpenseTracker.getAllCategories().subscribe(result=>{
      this.categories = result
      console.log(this.categories)
    })
  }
  onCreateBtn(){
    this.expenseToCreate.categoryId = this.selectedCategoryId
    this.serviceExpenseTracker.createExpense(this.expenseToCreate).subscribe(result=>{
      alert("Created")
      this.router.navigateByUrl("home")
    })
  }
}
