import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./matchData";
import { HtmlReport } from "./reportTargets/Htmlreport";

export interface Analizer {
  run(matches: MatchData[]):string;
}

export interface OutputTarget {
  print(report: string) : void;
}

export class Summary {
static winsAnalysisWithHtmlReport(team:string):Summary {
  return new Summary(
  new WinsAnalysis(team),
  new HtmlReport()
  )
  }
  constructor(public analyzer: Analizer, public outputTarget: OutputTarget) {}
  
  buildAndPrintReport(matches:MatchData[]):void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}

// new Summary (new WinsAnalysis(), new ConsoleReport());