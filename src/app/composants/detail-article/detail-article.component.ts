import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  articleDto : ArticleDto = {};

  @Output()
  suppressionResult = new EventEmitter

  selectedArticleIdDelete = -1;

  constructor(
    private router : Router,
    private articleService : ArticleService
  ) { }

  ngOnInit(): void {
  }

  modifierArticle(){
    this.router.navigate(['nouvelarticle',this.articleDto.id])
  }


  confirmerEtSupprimerArticle(){
    if( this.articleDto.id){
      this.articleService.deleteArticle(this.articleDto.id)
      .subscribe(res=>{
        this.suppressionResult.emit('success')
      }, error =>{
        this.suppressionResult.emit(error.error.errro)
      })
    }
  }


}
