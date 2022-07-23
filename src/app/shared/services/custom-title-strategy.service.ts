import {Injectable} from "@angular/core";
import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class CustomTitleStrategyService extends TitleStrategy {

  // this is a custom title strategy to add 'AoE' in front of every title
  updateTitle(snapshot: RouterStateSnapshot): void {
    // taking the default title
    const title = this.buildTitle(snapshot);
    if (title) {
      // adding 'AoE' in front of the default title and setting it with Angular title service
      this.titleService.setTitle(`AoE - ${title}`)
    }
  }
  // this is Angular's default title service
  constructor(private titleService: Title) {
    super();
  }
}
