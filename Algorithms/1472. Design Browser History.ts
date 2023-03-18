class BrowserHistory {
  constructor(homepage: string) {
    this.currentPage = homepage;
    this.forwardHistories = [];
    this.backHistories = [];
  }
  private currentPage: string;
  private forwardHistories: string[];
  private backHistories: string[];

  visit(url: string): void {
    this.forwardHistories = [];
    this.backHistories.push(this.currentPage);
    this.currentPage = url;
  }

  back(steps: number): string {
    while (steps > 0) {
      if (this.backHistories.length > 0) {
        this.forwardHistories.push(this.currentPage);
        this.currentPage = this.backHistories.pop();
      }
      steps--;
    }
    return this.currentPage;
  }

  forward(steps: number): string {
    while (steps > 0) {
      if (this.forwardHistories.length > 0) {
        this.backHistories.push(this.currentPage);
        this.currentPage = this.forwardHistories.pop();
      }
      steps--;
    }
    return this.currentPage;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
