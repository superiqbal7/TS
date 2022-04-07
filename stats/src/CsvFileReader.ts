import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public file: string) {}

  read(): void {
    this.data = fs.readFileSync(this.file, {
      encoding: 'utf8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    });
  }
}
