import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

    @Input() doughnutChartData;
    @Input() doughnutChartLabels;
    @Input() doughnutChartType;

    constructor() { }

    ngOnInit() {
    }
}
