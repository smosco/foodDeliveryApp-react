//saving new items//
import {
  doc,
  getDocs,
  orderBy,
  setDoc,
  collection,
  query,
} from "firebase/firestore";
import { fireStore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(fireStore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(fireStore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
