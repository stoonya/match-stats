import { Match } from '../Match';

export interface MatchAnalyzer {
  run(matches: Match[]): string;
}