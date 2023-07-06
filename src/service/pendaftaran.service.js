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

const lombaCollectionRef = collection(db, "data_pendaftaran");
class PendaftaranDataService {
  addPendaftaran = (newPendaftaran) => {
    return addDoc(lombaCollectionRef, newPendaftaran);
  };

  updatePendaftaran = (id, updatedPendaftaran) => {
    const PendaftaranDoc = doc(db, "data_pendaftaran", id);
    return updateDoc(PendaftaranDoc, updatedPendaftaran);
  };

  deletePendaftaran = (id) => {
    const PendaftaranDoc = doc(db, "data_pendaftaran", id);
    return deleteDoc(PendaftaranDoc);
  };

  getAllPendaftaran = () => {
    return getDocs(lombaCollectionRef);
  };

  getPendaftaran = (id) => {
    const PendaftaranDoc = doc(db, "data_pendaftaran", id);
    return getDoc(PendaftaranDoc);
  };
}

export default new PendaftaranDataService();
