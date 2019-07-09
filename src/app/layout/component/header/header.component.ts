import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Observable } from 'rxjs';
import { ThemeNavigation } from '../../../model/navigation.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu$: Observable<ThemeNavigation[]>;

  constructor(private theme: ThemeService) {
    this.menu$ = this.theme.getMenuLink();
  }

  ngOnInit() {
  }

}
