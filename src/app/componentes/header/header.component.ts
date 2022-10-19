import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;

  constructor(private router:Router
) {}
  ngOnInit(): void {}

  login(){
    this.router.navigate(['/login'])
  }
}
