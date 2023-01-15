import React, { useEffect, useState } from "react";
import "./styles.css";
import { ItemList, Progress } from "../../components";
import Loader from "../../components/loader";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };
    const calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(
        (scrollTop / totalDocScrollLength) * 100
      );
      setScrollPosition(scrollPosition);
    };

    const handleScroll = (event) => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const q = query(collection(db, "products"), where("categoryId", ">", "1"));

    // const products = collection(db, "products");

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
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-home">
      <div>
        <Progress scroll={scrollPosition}></Progress>
      </div>
      <div>
        <header className="container-items">
          {loading ? (
            <div className="loading-container">
              <Loader />
            </div>
          ) : (
            <>
              <ItemList></ItemList>
            </>
          )}
        </header>
      </div>
    </div>
  );
};

export default Home;
