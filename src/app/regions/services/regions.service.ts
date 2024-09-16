import { Injectable } from '@angular/core';
import { Region } from '../region';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private regionsCollection: AngularFirestoreCollection<Region>;
  regions$: Observable<Region[]>;

  constructor(private afs: AngularFirestore) {
    this.regionsCollection = afs.collection<Region>('regions', ref => ref.orderBy('id'));
    this.regions$ = this.regionsCollection.valueChanges({ idField: 'docId' });
  }

  getRegions(): Observable<Region[]> {
    return this.regionsCollection.valueChanges({ idField: 'docId' });
  }

  getRegion(docId: string): Observable<Region | undefined> {
    return this.regionsCollection.doc<Region>(docId).valueChanges();
  }

  addRegion(region: Region): Promise<void> {
    const docId = this.afs.createId();
    return this.regionsCollection.doc(docId).set({ ...region, id: Date.now() });
  }

  updateRegion(docId: string, region: Region): Promise<void> {
    return this.regionsCollection.doc(docId).update(region);
  }

  deleteRegion(docId: string): Promise<void> {
    return this.regionsCollection.doc(docId).delete();
  }
}
