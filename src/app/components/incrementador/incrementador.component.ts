import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() emitCambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  onChange(newValue: number) {

    // const elementoHTML: any = document.getElementsByName('progreso')[0];

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elementoHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.emitCambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor( valor ) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.emitCambioValor.emit(this.progreso);
  }

}
