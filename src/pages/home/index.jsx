import React, { useEffect, useState } from "react";
import "./styles.css";
import { ItemList, Progress, FilterMenuItem } from "../../components";
import Loader from "../../components/loader";

import { useFirebase } from "../../hooks/useFirebase.js";

const Home = () => {
  const { loading } = useFirebase();
  const [scrollPosition, setScrollPosition] = useState(0);

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
