import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//--A solution based on abstract class and inheritance with passing generics where we create instance of MatchReader class only--//
// const reader = new MatchReader('football.csv');
// reader.read();

//--Interface based solution--//
// Create an object that satisfies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// )

//--Using static methods instead of creating instance--//
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
