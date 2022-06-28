import { Router } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProduto[] = [];
  total = 0;
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidadeEstoque), 0);
  }

  comprar() {
    alert("Parabéns, você finalizou a compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }

}
