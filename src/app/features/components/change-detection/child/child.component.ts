import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ICourse } from "../cource";

@Component({
  selector: "app-child",
  imports: [],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class ChildComponent implements OnChanges {
  @Input() courses!: ICourse[];
  

  constructor(private $cd: ChangeDetectorRef) {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent ngOnChanges:", changes);
  }

  
}
