import fs from 'fs';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

//--A solution based on abstract class and inheritance with passing generics where we create instance of MatchReader class only--//
// const reader = new MatchReader('football.csv');
// reader.read();

//--Interface based solution--//
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches);
