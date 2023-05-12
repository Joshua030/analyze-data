import { OutputTarget } from "../summary";

export class ConsolerReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
