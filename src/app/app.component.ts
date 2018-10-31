import { Component, SimpleChange, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`],
})
export class AppComponent implements OnChanges {
  content = "Content";
  content1 = "This is an editable section";

  styles() {
    return {
      "background-color": "yellow",
      margin: "10px auto",
      "max-width": "60%",
      "line-height": "25px",
      padding: "10px"
    };
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(change);
  }
}
