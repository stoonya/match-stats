import { MatchResult } from './MatchResult';

export type Match = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  matchResult: MatchResult;
  referee: string;
}