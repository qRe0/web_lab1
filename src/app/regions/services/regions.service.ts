import { Injectable } from '@angular/core';
import { Region } from '../region';
import { REGIONS } from '../mock-region-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private regions = REGIONS;

  constructor() { }

  getRegions(): Observable<Region[]> {
    return of(this.regions);
  }

  getRegion(id: number): Observable<Region | undefined> {
    return of(this.regions.find(region => region.id === id));
  }

  addRegion(region: Region): Observable<void> {
    region.id = this.generateId();
    this.regions.push(region);
    return of();
  }

  updateRegion(region: Region): Observable<void> {
    const index = this.regions.findIndex(r => r.id === region.id);
    if (index !== -1) {
      this.regions[index] = region;
    }
    return of();
  }

  deleteRegion(id: number): Observable<void> {
    this.regions = this.regions.filter(region => region.id !== id);
    return of();
  }

  private generateId(): number {
    return this.regions.length > 0 ? Math.max(...this.regions.map(r => r.id)) + 1 : 1;
  }
}
