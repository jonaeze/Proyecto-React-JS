import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const useFirebase = (url) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const q = query(collection(db, "products"), where("categoryId", ">=", "1"));

    const qcategories = query(collection(db, "categories"));

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay resultados");
          setProducts([]);
        } else {
          const result = snapshot.docs.map((doc) => doc.data());
          setProducts(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    getDocs(qcategories)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay resultados");
          setCategories([]);
        } else {
          const result = snapshot.docs.map((doc) => doc.data());
          setCategories(result);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    products,
    setProducts,
    loading,
    setLoading,
    categories,
    setCategories,
  };
};
