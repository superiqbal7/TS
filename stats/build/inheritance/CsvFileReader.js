"use strict";
// import fs from 'fs';
// export abstract class CsvFileReader<T> {
//   data: T[] = [];
//   constructor(public file: string) {}
//   abstract mapRow(row: string[]): T;
//   read(): void {
//     this.data = fs.readFileSync(this.file, {
//       encoding: 'utf8'
//     })
//     .split('\n')
//     .map((row: string): string[] => {
//       return row.split(',');
//     })
//     .map(this.mapRow);
//   }
// }
