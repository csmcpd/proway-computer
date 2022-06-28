import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.produtos = this.produtosService.getALL();
    const produtos = this.produtosService.getALL();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        alert("Voce fez pesquisa");
        return;
      }

      this.produtos = produtos;

    })
  }

}
