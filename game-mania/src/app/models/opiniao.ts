export class Opiniao {

  constructor (
    public nome: string,
    public opiniao: string
  ){}

  getNome():string {
    return this.nome;
  }

  getOpiniao():string {
    return this.opiniao;
  }
}
