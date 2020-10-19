// angular
import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

// services
import { AuthProviderService } from './../../../authentication/services/auth-provider.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: { class: 'c-toolbar' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Output() event: EventEmitter<void> = new EventEmitter();

  private _title: string;
  @Input() set title(value: string) {
    if (value !== this._title) {
      this._title = value;
    }
  }
  get title(): string {
    return this._title;
  }

  @Input() hasIcons = true;

  constructor(private authProviderService: AuthProviderService) {}

  emitEvent(): void {
    this.event.emit();
  }

  logout(): void {
    this.authProviderService.logout();
  }
}
