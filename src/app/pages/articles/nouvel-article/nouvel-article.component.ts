import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ArticleDto, CategoryDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  articleDto : ArticleDto = {};
  categorieDto : CategoryDto = {};
  listCategorie : Array<CategoryDto> = [];
  errorMsg : Array<string> = [];

  constructor(
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private articlesService : ArticleService,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.findAll()
    .subscribe(categories =>{
      this.listCategorie = categories;
    });

    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if(idArticle){
      this.articlesService.findArticleById(idArticle)
      .subscribe(article => {
        this.articleDto = article;
        this.categorieDto = this.articleDto.category ? this.articleDto.category : {};
      })
    }
  }

  cancel():void{
    this.router.navigate(["articles"]);
  }

  enregistrerArticle() : void{
    if(this.categorieDto?.id){
      this.articleDto.category = this.categorieDto;
    }
    this.articlesService.enregistrerArticle(this.articleDto)
    .subscribe( art => {
      this.router.navigate(['articles']);
    },error =>{
      this.errorMsg = error.error.errors;
    })
  }

  calculerTTC(){
    if(this.articleDto.prixUnitaireHt && this.articleDto.tauxTva){
      // prixHT + (prixHT * (TauxTVA / 100))
      this.articleDto.prixUnitaireTtc =
         +this.articleDto.prixUnitaireHt + (+( this.articleDto.prixUnitaireHt * ( this.articleDto.tauxTva / 100)))
    }
  }
}
