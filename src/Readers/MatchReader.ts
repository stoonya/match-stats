import moment from 'moment';
import { Match } from '../Match';
import { Reader } from './Reader';
import { MatchResult } from '../MatchResult';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {
  static fromCsv(relativeFilePath: string): MatchReader {
    return new MatchReader(new CsvFileReader(relativeFilePath));
  }

  matches: Match[] = [];
  constructor(public reader: Reader) {}

  load() {
    this.reader.read();
    this.convertToMatches(this.reader.data);
  }

  private convertToMatches(data: string[][]): void {
    data.forEach((data: string[]) => {

      const match: Match = {
      date: moment(data[0], "DD/MM/YYYY").toDate(),
      homeTeam: data[1],
      awayTeam: data[2],
      homeGoals: parseFloat(data[3]),
      awayGoals: parseFloat(data[4]),
      matchResult: data[5] as MatchResult,
      referee: data[6]
      }
    
      this.matches.push(match);
    });
  }
}