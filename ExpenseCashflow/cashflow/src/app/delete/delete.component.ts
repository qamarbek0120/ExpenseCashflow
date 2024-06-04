import { Component, inject } from '@angular/core';
import { TaskModel } from '../cashflow';
import { CashflowService } from '../cashflow.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteExpense:TaskModel={
    id:0,
    description:"",
    amount:0,
    date: new Date(),
    dateAdded: new Date(),
    categoryId:0,
    category:{
      id:0,
      categoryName:""
    }
  }
  service = inject(CashflowService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getById(this.activatedRoute.snapshot.params["id"]).subscribe((result)=>{
      this.deleteExpense = result
    });
  }

  onDeleteButtonClick(id: number){
    console.log(this.deleteExpense.id);
    this.service.delete(this.deleteExpense.id).subscribe(()=>{
      alert("Deleted item with ID:" + id)
      this.router.navigateByUrl("home")
    })
  }
  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
}
