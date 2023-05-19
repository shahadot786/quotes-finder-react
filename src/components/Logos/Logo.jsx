import React from "react";
import logo from "../../assets/app_logo.png";
export default function Logo({ size }) {
  return <img src={logo} alt="app logo" width={size} height={size} />;
}
