import fs from 'fs';
import { Reader } from './Reader';

export class CsvFileReader implements Reader {
  data: string[][] = [];
  constructor(public relativeFilePath: string) {
  }

  read(): void {
    const fileData = fs.readFileSync(this.relativeFilePath, "utf8");
    
    this.data = fileData
      .split('\n')
      .map((line: string): string[] => line.split(','));
  }
}