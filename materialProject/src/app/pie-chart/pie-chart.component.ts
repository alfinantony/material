import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts;
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Sales 2022-2023',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits:{
      enabled:false,
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Items',
        colorByPoint: true,
        data: [{
            name: 'Helmet',
            y: 63.06,
            sliced: true,
            selected: true
        },  {
            name: 'Accessories',
            y: 19.84,
        },  {
            name: 'Gloves',
            y: 4.18,
        }, {
            name: 'Riding Shoes',
            y: 4.12,
        }, {
            name: 'Jacket',
            y: 2.33,
        },{
          name: 'Key Chain',
          y: 0.45,
        },{
            name: 'Other',
            y: 1.582,
        }]
    }]
    }
    HC_exporting(Highcharts);
  }

}
