import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-galeria-produtos',
  templateUrl: './galeria-produtos.component.html',
  styleUrls: ['./galeria-produtos.component.css']
})
export class GaleriaProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  promocao: string = "Promoção do dia!"

  xbox1 = new Card("../../../assets/img/galeria/jogos/xbox/50/battefield-2042.jpg","Battefield 2042",this.promocao,"R$ 100.00")
  xbox2 = new Card("../../../assets/img/galeria/jogos/xbox/50/farcry-6.jpg","Farcry 6",this.promocao,"R$101.00")
  xbox3 = new Card("../../../assets/img/galeria/jogos/xbox/50/hunting-2-simulator.jpg","Hunting 2 Simulator",this.promocao,"R$ 102.00")
  xbox4 = new Card("../../../assets/img/galeria/jogos/xbox/50/little-hope.jpg","Little hope",this.promocao,"R$103.00")
  xbox5 = new Card("../../../assets/img/galeria/jogos/xbox/50/minecraft-dungeons-hero.jpg","Minecraft dungeons",this.promocao,"R$104.00")

  psn1 = new Card("../../../assets/img/galeria/jogos/psn/50/elden-ring.jpg","Elden ring",this.promocao,"R$ 200.00")
  psn2 = new Card("../../../assets/img/galeria/jogos/psn/50/ghost-of-tsushima.jpg","Ghost of tsushima",this.promocao,"R$201.00")
  psn3 = new Card("../../../assets/img/galeria/jogos/psn/50/ghostwire-tokio.jpg","Ghostwire tokio",this.promocao,"R$ 202.00")
  psn4 = new Card("../../../assets/img/galeria/jogos/psn/50/horizon-forbidden-west.jpg","Horizon forbidden west",this.promocao,"R$203.00")
  psn5 = new Card("../../../assets/img/galeria/jogos/psn/50/metro-exodus.jpg","Metro exodus",this.promocao,"R$204.00")

  nint1 = new Card("../../../assets/img/galeria/jogos/nintendo/50/american-fugitive.jpg","American fugitive",this.promocao,"R$ 300.00")
  nint2 = new Card("../../../assets/img/galeria/jogos/nintendo/50/final-fantasy.jpg","Final fantasy",this.promocao,"R$301.00")
  nint3 = new Card("../../../assets/img/galeria/jogos/nintendo/50/fire-emblem-three-houses.jpg","Fire emblem three houses",this.promocao,"R$ 302.00")
  nint4 = new Card("../../../assets/img/galeria/jogos/nintendo/50/mariokart-deluxe-8.jpg","Mariokart deluxe 8",this.promocao,"R$303.00")
  nint5 = new Card("../../../assets/img/galeria/jogos/nintendo/50/metroid-dread.jpg","Metroid dread",this.promocao,"R$304.00")
}
