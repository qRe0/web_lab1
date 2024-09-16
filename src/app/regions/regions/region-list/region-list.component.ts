import { Component, OnInit } from '@angular/core';
import { Region } from '../../region';
import { RegionsService } from '../../services/regions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  regions: Region[] = [];

  constructor(private regionsService: RegionsService, private router: Router) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.regionsService.getRegions().subscribe(regions => this.regions = regions);
  }

  onSelect(region: Region): void {
    this.router.navigate(['/details', region.id]);
  }
}
