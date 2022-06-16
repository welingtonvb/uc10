export class Card {

  constructor (
    public imagem: string,
    public titulo: string,
    public descricao: string,
    public preco: string
  ){}

  getImagem(): string {
    return this.imagem
  }

  getTitulo(): string {
    return this.titulo
  }

  getDescricao(): string {
    return this.descricao
  }

  getPreco(): string {
    return this.preco
  }
}
