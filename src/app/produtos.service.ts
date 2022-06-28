import { IProduto, produtos } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;
  constructor() { }

  getALL() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
