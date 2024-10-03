import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  QuerySnapshot,
  setDoc,
  where,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore = inject(Firestore);

  constructor() {}

  public setDoc<T extends DocumentData>(
    collection: string,
    data: T,
    uid?: string
  ) {
    const docRef = uid
      ? doc(this.firestore, collection, uid)
      : doc(this.firestore, collection);
    setDoc(docRef, data);
  }
}
