import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootStore } from "../../types";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() pageTitle!: string;

  constructor(private store: Store<RootStore>) {
    this.store.subscribe({
      next: (state) => {
        //console.log(this.pageTitle)
        //console.log(state.root.pageTitle.value)
        this.pageTitle = state.root.pageTitle.value;
      }
    });
  }
}
