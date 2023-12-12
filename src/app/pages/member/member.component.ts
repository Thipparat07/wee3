import { Component } from '@angular/core';
import { HeaderComponent } from "../main/header/header.component";
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-member',
    standalone: true,
    templateUrl: './member.component.html',
    styleUrl: './member.component.scss',
    imports: [HeaderComponent,RouterModule]
})
export class MemberComponent {

}
