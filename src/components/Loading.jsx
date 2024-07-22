import React from "react";
import CardShimmer from "./CardShimmer";
const Loading = () => {
  return (
    <>
      <h1>Loading.....</h1>
      <div className="md:flex md:justify-center md:flex-wrap">
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
      </div>
    </>
  );
};

export default Loading;
