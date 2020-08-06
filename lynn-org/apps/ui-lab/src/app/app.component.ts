import { Component } from '@angular/core';

interface Tool {
  name: string;
}

@Component({
  selector: 'lynn-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 tools: Tool[] = [{name: 'Tool 1'},  {name: 'Tool 2'}];

 addTool = (v: string) => this.tools.push({name: v});
}
