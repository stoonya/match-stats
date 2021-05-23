import { MatchReader } from './Readers/MatchReader';
import { Summary } from './Summary';

const reader = MatchReader.fromCsv("././data/football.csv");
const consoleSummary = Summary.avgGoalsToConsole('Liverpool');
const htmlSummary = Summary.winGamesToHtml('Newcastle');

reader.load();
consoleSummary.analyzeAndReport(reader.matches);
htmlSummary.analyzeAndReport(reader.matches);