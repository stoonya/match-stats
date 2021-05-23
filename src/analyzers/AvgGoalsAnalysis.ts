import { Match } from '../Match';
import { MatchAnalyzer } from './MatchAnalyzer';

export class AvgGoalsAnalysis implements MatchAnalyzer {
  result: string = "No results";
  constructor (public teamName: string) {}

  run(matches: Match[]): string {
    
    let gamesCounter = 0;
    let goalsForCounter = 0;
    let goalsAgainstCounter = 0;
    let avgGoalsFor = 0;
    let avgGoalsAgainst = 0;
    
    matches.forEach((match: Match): void => {
      
      if(match.homeTeam === this.teamName) {
        gamesCounter++;
        goalsForCounter += match.homeGoals;
        goalsAgainstCounter += match.awayGoals;
      } else if(match.awayTeam === this.teamName) {
        gamesCounter++;
        goalsForCounter += match.awayGoals;
        goalsAgainstCounter += match.homeGoals;
      }
    });

    avgGoalsFor = Math.round(((goalsForCounter / gamesCounter) + Number.EPSILON) * 100) / 100;
    avgGoalsAgainst = Math.round(((goalsAgainstCounter / gamesCounter) + Number.EPSILON) * 100) / 100;

    return `${this.teamName}'s avg GF: ${avgGoalsFor} and avg GA: ${avgGoalsAgainst}`;
  }
}