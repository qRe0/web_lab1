import { Component, OnInit } from '@angular/core';
import { Region } from '../../region';
import { RegionsService } from '../../services/regions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.css']
})
export class RegionFormComponent implements OnInit {

  region: Region = {
    id: 0,
    name: '',
    language: '',
    square: 0,
    temperature: 0,
    humidity: 0
  };

  isEditMode: boolean = false;

  constructor(
    private regionsService: RegionsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.isEditMode = true;
      this.regionsService.getRegion(id).subscribe(region => {
        if (region) {
          this.region = { ...region };
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.regionsService.updateRegion(this.region).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.regionsService.addRegion(this.region).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  onDelete(): void {
    if (confirm('Вы уверены, что хотите удалить этот регион?')) {
      this.regionsService.deleteRegion(this.region.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
