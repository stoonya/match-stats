import { MatchReporter } from './MatchReporter';

export class ConsoleReporter implements MatchReporter {
  run(report: string): void {
    console.log(report);
  }
}