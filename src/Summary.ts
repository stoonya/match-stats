import { AvgGoalsAnalysis } from "./analyzers/AvgGoalsAnalysis";
import { MatchAnalyzer } from "./analyzers/MatchAnalyzer";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Match } from "./Match";
import { ConsoleReporter } from "./reporters/ConsoleReporter";
import { HtmlReporter } from "./reporters/HtmlReporter";
import { MatchReporter } from "./reporters/MatchReporter";

export class Summary {
  static avgGoalsToConsole(teamName: string): Summary {
    return new Summary(new AvgGoalsAnalysis(teamName), new ConsoleReporter());
  }

  static winGamesToHtml(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReporter());
  }

  constructor(public analyzer: MatchAnalyzer, public reporter: MatchReporter) {}

  analyzeAndReport(matches: Match[]) {
    this.reporter.run(this.analyzer.run(matches))
  }
}