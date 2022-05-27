import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/gs-api/src/models';
import { ArticleControllerService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  listArticle : Array<ArticleDto> = [];

  constructor(private router:Router , private articleService : ArticleControllerService) { }

  ngOnInit(): void {
    this.articleService.findAllUsingGET()
    .subscribe(article=>{
      this.listArticle = article ;
    });
  }

  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }
}
