import {Injectable} from "@angular/core";
import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class CustomTitleStrategyService extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.titleService.setTitle(`AoE - ${title}`)
    }
  }
  constructor(private titleService: Title) {
    super();
  }
}
