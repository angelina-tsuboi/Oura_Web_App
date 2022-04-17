import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase) { }

  public getReadings(uid: string): AngularFireList<any>{
    return this.db.list(`UserData/${uid}/readings`);
  }
}
