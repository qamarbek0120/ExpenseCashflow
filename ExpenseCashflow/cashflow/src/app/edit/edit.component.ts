import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CashflowService } from '../cashflow.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../cashflow';



function findIndexById(jsonArray: any[], indexToFind: number): number{
  return jsonArray.findIndex((expense)=> expense.id == indexToFind)
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInput, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  expenseService = inject(CashflowService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  editExpense: TaskModel={
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

  categoryObject: any;
  selected: any;
  cId: number = 0;

  ngOnInit(){
    this.expenseService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result=>{
      this.editExpense = result;
      this.selected = this.editExpense.categoryId
    })

    this.expenseService.getAllCategories().subscribe((result)=>{
      this.categoryObject = result
    })
  }
  toHome(){
    this.router.navigateByUrl("home")
  }

  edit(){
    this.editExpense.categoryId = this.cId;
    this.editExpense.category = this.categoryObject[findIndexById(this.categoryObject, this.cId)];
    this.expenseService.edit(this.editExpense).subscribe(result=>{
      alert("Changes has been saved")
      this.router.navigateByUrl("home")
    })
  }
}
