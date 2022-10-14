import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { OcapCoreModule } from '@metad/ocap-angular/core';
import { DuckdbWasmAgent } from '@metad/ocap-duckdb';
import { AgentType } from '@metad/ocap-core';
import { AnalyticalCardModule } from '@metad/ocap-angular/analytical-card';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as SQL from '@metad/ocap-sql';
import { MockAgent } from './mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerTheme, use } from 'echarts/core';
import { DEFAULT_THEME } from '@metad/ocap-echarts';
import 'echarts-gl/dist/echarts-gl';

registerTheme(DEFAULT_THEME.name, DEFAULT_THEME.echartsTheme);

import { Scatter3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';

use([Grid3DComponent, Scatter3DChart]);

if (SQL) {
  console.log(`加载 SQL`);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    AnalyticalCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    OcapCoreModule.forRoot([new MockAgent()], {
      Sales: {
        name: 'Sales',
        type: 'SQL',
        agentType: AgentType.Browser,
      },
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
