import React, { useState, useEffect } from "react";
import Logo from "../Logos/Logo";
import Heading from "../Heading/Heading";
import GetQuotes from "../Api/GetQuotes";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <Logo size={"120px"} />
      <Heading fontSize={"22px"} color={"#1b1b1c"}>
        Quotes Finder
      </Heading>
      <GetQuotes />
    </div>
  );
}
