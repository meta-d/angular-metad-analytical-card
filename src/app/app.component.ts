import { Component, VERSION } from '@angular/core';
import {
  ChartDataZoomType,
  ChartDimensionRoleType,
  ChartMeasureRoleType,
  ChartOptions,
  OrderDirection,
  ReferenceLineAggregation,
  ReferenceLineType,
  ReferenceLineValueType,
} from '@metad/ocap-core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [
    {
      title: 'Sales Order Bar',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Scatter3D',
          },
          dimensions: [
            {
              dimension: 'product',
              role: ChartDimensionRoleType.Stacked,
            },
            {
              dimension: 'productCategory',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
            {
              dimension: 'Measures',
              measure: 'quantity',
              role: ChartMeasureRoleType.Size,
            },
          ],
        },
      },
      chartSettings: {},
      chartOptions: {},
    },
    {
      title: 'Sales Order Bar',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Bar',
          },
          dimensions: [
            {
              dimension: 'product',
              role: ChartDimensionRoleType.Stacked,
            },
            {
              dimension: 'productCategory',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
          ],
        },
      },
      chartSettings: {},
      chartOptions: {},
    },
    {
      title: 'Purchase Order Bar',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Bar',
          },
          dimensions: [
            {
              dimension: 'product',
            },
            {
              dimension: 'productCategory',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
              palette: {
                name: 'PuOr',
                pattern: 1,
              },
              referenceLines: [
                {
                  label: 'Sales Average',
                  type: ReferenceLineType.markLine,
                  valueType: ReferenceLineValueType.dynamic,
                  aggregation: ReferenceLineAggregation.average,
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Sales Order Line',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Line',
          },
          dimensions: [
            {
              dimension: 'product',
            },
            {
              dimension: 'productCategory',
              role: ChartDimensionRoleType.Trellis,
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
    {
      title: 'Sales Order Two Measures',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Bar',
          },
          dimensions: [
            {
              dimension: 'product',
            },
            {
              dimension: 'productCategory',
              role: ChartDimensionRoleType.Stacked,
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
            {
              dimension: 'Measures',
              measure: 'quantity',
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
    {
      title: 'Sales Order Treemap',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Treemap',
          },
          dimensions: [
            {
              dimension: 'productCategory',
            },
            {
              dimension: 'product',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
    {
      title: 'Sales Order Heatmap',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Heatmap',
          },
          dimensions: [
            {
              dimension: 'productCategory',
            },
            {
              dimension: 'product',
              role: ChartDimensionRoleType.Category2,
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
              palette: {
                name: 'PuOr',
              },
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
    {
      title: 'Sales Order Scatter',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Scatter',
          },
          dimensions: [
            {
              dimension: 'productCategory',
              role: ChartDimensionRoleType.Trellis,
            },
            {
              dimension: 'product',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
              palette: {
                name: 'PuOr',
              },
            },
            {
              dimension: 'Measures',
              measure: 'quantity',
              role: ChartMeasureRoleType.Size,
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
    {
      title: 'Sales Order Sankey',
      dataSettings: {
        dataSource: 'Sales',
        entitySet: 'SalesOrder',
        chartAnnotation: {
          chartType: {
            type: 'Sankey',
          },
          dimensions: [
            {
              dimension: 'productCategory',
            },
            {
              dimension: 'product',
            },
          ],
          measures: [
            {
              dimension: 'Measures',
              measure: 'sales',
            },
          ],
        },
      },
      chartSettings: {
        universalTransition: true,
      },
    },
  ];
}
