import { Match } from '../Match';
import { MatchResult } from '../MatchResult';
import { MatchAnalyzer } from './MatchAnalyzer';

export class WinsAnalysis implements MatchAnalyzer {
  result: string = "No results";
  constructor (public teamName: string) {}

  run(matches: Match[]): string {
    
    let teamWins = 0;

    matches.forEach((match: Match): void => {
      if((match.homeTeam === this.teamName && match.matchResult === MatchResult.HomeWin) || (match.awayTeam === this.teamName && match.matchResult === MatchResult.AwayWin)) {
        teamWins++;
      }
    });

    return `${this.teamName} won ${teamWins} times`;
  }
}