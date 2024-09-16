import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from '../../services/regions.service';
import { Region } from '../../region';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {

  region: Region | undefined;

  constructor(
    private route: ActivatedRoute,
    private regionsService: RegionsService
  ) { }

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(): void {
    const docId = this.route.snapshot.paramMap.get('id');
    if (docId) {
      this.regionsService.getRegion(docId).subscribe(region => this.region = region);
    }
  }
}
