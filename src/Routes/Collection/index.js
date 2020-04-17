import React, { useState, useEffect } from "react";
import { moviesApi } from "api";
import Element from "./Element";

export default (props) => {
  const [state, setState] = useState({ loading: true, collection: null });

  useEffect(() => {
    const getCollection = async () => {
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = props;

      if (isNaN(Number(id))) push("/");

      try {
        const { data: collection } = await moviesApi.collection(id);
        setState({ collection, loading: false });
      } catch (error) {
        console.log(error);
      }
    };
    getCollection();
  }, []);

  return <Element {...state}></Element>;
};
