import { Component, SimpleChange, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <section class="section">
      <h2>Inside a Template Driven Forms</h2>
      <form #form="ngForm">
        <editable name="editable" [styles]="styles()" ngModel></editable>
      </form>
      <pre>{{ form.value | json }}</pre>
    </section>

    <section class="section">
      <h2>One-way Data-binding</h2>
      <editable name="editable1" [styles]="styles()" [ngModel]="content"></editable>
      <div class="form-controls">
        <p><label for="content">change the content:</label><br>
        <input type="text" name="content1" [(ngModel)]="content" /></p>
      </div>
      <pre>{{ content | json }}</pre>
    </section>

    <section class="section">
      <h2>Two-way Data-binding</h2>
      <editable name="editable2" [styles]="styles()" [(ngModel)]="content1"></editable>
      <pre>{{ content1 | json }}</pre>
    </section>
  `,
  styles: [
    `
      .section {
        margin: 40px auto 0 auto;
        max-width: 800px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }

      .section:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .section h2 {
        font-size: 1.15rem;
      }

      .form-controls input {
        padding: 5px 2px;
        line-height: 20px;
      }

      .form-controls label {
        font-weight: bold;
      }
    `
  ]
})
export class AppComponent implements OnChanges {
  content = "Content";
  content1 = "Content 1";

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
