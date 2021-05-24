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
    this.matches = data.map((row: string[]) => {
      return {
        date: moment(row[0], "DD/MM/YYYY").toDate(),
        homeTeam: row[1],
        awayTeam: row[2],
        homeGoals: parseFloat(row[3]),
        awayGoals: parseFloat(row[4]),
        matchResult: row[5] as MatchResult,
        referee: row[6]
      }
    });
  }
}