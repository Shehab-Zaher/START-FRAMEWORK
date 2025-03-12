import { Component } from '@angular/core';
import { BaseOptions } from 'node:vm';

@Component({
  selector: 'app-protoflio',
  standalone: true,
  imports: [],
  templateUrl: './protoflio.component.html',
  styleUrl: './protoflio.component.css'
})
export class ProtoflioComponent {

  isHide:boolean = true

  layerr:string = ""

  imgs:string[]=["../../assets/poert1.png" ,"../../assets/port2.png" , "../../assets/port3.png" , "../../assets/poert1.png" , "../../assets/port2.png" , "../../assets/port3.png" ]

  hideModel( e:EventTarget|null , eleImg:HTMLImageElement ):void{
    if( e == eleImg)return
    else{
      this.isHide=true
    }

  }
}
