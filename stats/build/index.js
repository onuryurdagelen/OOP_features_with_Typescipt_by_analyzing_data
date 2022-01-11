"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
//Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('../football.csv');
//Create an instance of MatchReader and pass in something satisfying
//the 'DataReader' interface
const matchReader = MatchReader_1.MatchReader.fromCsv('../football.csv');
matchReader.load();
//matchReader.matches
console.log(matchReader);
// const summary = new Summary(new WinsAnalysis('Man United'),new ConsoleReport());
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Liverpool');
// const summary = Summary.winsAnalysisWithConsoleReport('Liverpool');
// console.log(summary)
summary.buildAndPrintReport(matchReader.matches);
// console.log(reader.data)
// console.log(dateStringToDate('27/10/2018'))
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
//JS Approach
// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }
// const dateOfFirstMatch = matchReader.matches[0][0];
// console.log(dateOfFirstMatch)
//2018-08-09T21:00:00.000Z
// console.log(`Man United won ${manUnitedWins} games`);
// let splittedMatchesAsArrays = splittedMatches.map(match => match);
// console.log(splittedMatchesAsArrays);
