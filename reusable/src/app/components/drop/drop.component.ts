import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent {
 @Input() title ?: string
 @Input() default ?: string
 @Input() options ?: string[]

 stopRefresh(opt : string): boolean{
  this.default = opt
  return false
 }
}
