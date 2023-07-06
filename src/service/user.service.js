import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "user");
class UserDataService {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const UserDoc = doc(db, "user", id);
    return updateDoc(UserDoc, updatedUser);
  };

  deleteUser = (id) => {
    const UserDoc = doc(db, "user", id);
    return deleteDoc(UserDoc);
  };

  getAllUser = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const UserDoc = doc(db, "user", id);
    return getDoc(UserDoc);
  };
}

export default new UserDataService();
