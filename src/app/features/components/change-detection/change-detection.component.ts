import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { ICourse } from './cource';

@Component({
  selector: 'app-change-detection',
  imports: [CommonModule, ChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  courses: ICourse[] = [
    { id: 1, name: 'Angular For Beginners' },
    { id: 2, name: 'Angular Core Deep Dive' },
    { id: 3, name: 'Angular Forms In Depth' },
  ];
  constructor(private $cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateWithoutMarkForCheck();
  }

  // 1. No manual CD call - view will NOT update immediately
  updateWithoutMarkForCheck() {
    setTimeout(() => {
      this.courses[0].name = 'Updated WITHOUT markForCheck';
      // this.courses = [
      //   { ...this.courses[0], name: 'Updated course' },
      //   ...this.courses.slice(1),
      // ];
      this.$cd.markForCheck();
      // No cd.markForCheck() or cd.detectChanges()
      // View might NOT update immediately because OnPush CD doesn't detect mutation here
    }, 200);
  }

  // 2. Using markForCheck() - schedules CD on next cycle - view WILL update soon after
  updateWithMarkForCheck() {
    setTimeout(() => {
      this.courses[0].name = 'Updated WITH markForCheck';
      this.$cd.markForCheck(); // Schedules this component for CD on next cycle
    }, 200);
  }

  // 3. Using detectChanges() - runs CD immediately - view updates right away
  updateWithDetectChanges() {
    setTimeout(() => {
      this.courses[0].name = 'Updated WITH detectChanges';
      this.$cd.detectChanges(); // Runs CD now, view updates immediately
    }, 200);
  }
}
