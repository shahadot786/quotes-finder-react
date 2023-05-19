import React from "react";

export default function QuotesCard({ quotes, author, category }) {
  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "#ddd",
        borderRadius: "10px",
        textAlign: "center",
        width: "200px",
        height: "100%",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <div>
        <p
          style={{ fontSize: "20px", fontWeight: "500", fontFamily: "cursive" }}
        >
          {`" ${quotes} "`}
        </p>
      </div>
      <div>
        <p
          style={{
            fontSize: "14px",
            color: "#ff0049",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          {author}
        </p>
        <p>{category}</p>
      </div>
    </div>
  );
}
