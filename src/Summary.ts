import { AvgGoalsAnalysis } from "./Analyzers/AvgGoalsAnalysis";
import { MatchAnalyzer } from "./Analyzers/MatchAnalyzer";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { Match } from "./Match";
import { ConsoleReporter } from "./Reporters/ConsoleReporter";
import { HtmlReporter } from "./Reporters/HtmlReporter";
import { MatchReporter } from "./Reporters/MatchReporter";

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