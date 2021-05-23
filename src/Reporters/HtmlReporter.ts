import { MatchReporter } from './MatchReporter';
import fs from 'fs';

export class HtmlReporter implements MatchReporter {
  run(report: string): void {
    
    const file = `
    <h1>HTML REPORT</h1>
    <div>${report}</div>`

    fs.writeFileSync('././htmlReports/report.html', file);
  }
}