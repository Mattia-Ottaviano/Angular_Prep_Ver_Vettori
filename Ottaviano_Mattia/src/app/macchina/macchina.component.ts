import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() macc: string = "";
  pezziAuto: string[];
  constructor() {
    this.pezziAuto = ["viti", " bulloni", " chiodi", " ferro"]
   }

  ngOnInit(): void {
  }

}
