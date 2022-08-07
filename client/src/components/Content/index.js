import { Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchGallery } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useGallery } from "../../context/GalleryContext";
import Form from "../Form";

export default function ContentSlider() {
  const { isLoading, isError, data } = useQuery(["gallery"], () =>
    fetchGallery()
  );

  const [index, setIndex] = useState(0);
  const [bool, setBool] = useState(true);
  const gallery = useGallery();

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      console.log(gallery?.length + " " + index);
    }, gallery[index]?.duration);

    dataAddArray();

    return () => {
      clearInterval(interval);
    };
  }, [index, bool]);

  const dataAddArray = () => {
    if (data != null && bool) {
      data.map((item) => {
        return gallery?.push(item);
      });
      setBool(false);
      console.log(gallery);
    }
    if (index === gallery?.length) {
      setIndex(0);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error.</div>;
  }

  return (
    <div className="content">
      {gallery[index]?.type === "img" ? (
        <Img src={gallery[index]?.url} />
      ) : (
        <video autoPlay loop muted src={gallery[index]?.url} />
      )}
      <Form />
    </div>
  );
}
