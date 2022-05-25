import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {

  listCategories : Array<CategoryDto> = [];
  
  constructor(
    private router:Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {

    this.categoryService.findAll()
    .subscribe(res=>{
      this.listCategories = res;
    })
  }
  
  nouvelCategory(): void{
    this.router.navigate(['nouvellecategorie']);
  }
}
