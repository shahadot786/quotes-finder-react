import React from "react";

export default function Heading({ children, fontSize, color }) {
  return <h1 style={{ fontSize: fontSize, color: color }}>{children}</h1>;
}
