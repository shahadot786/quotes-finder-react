import React, { useState, useEffect } from "react";
import QuotesCard from "../Card/QuotesCard";
import axios from "axios";

export default function GetQuotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [searchQuotes, setSearchQuotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "JSW8crw0RChBjSO0u5RIEg==D9WSHGeECU1pwQyk";
  const BASE_URL =
    "https://api.api-ninjas.com/v1/quotes?limit=2&category=" + searchQuotes;
  const HEADERS = {
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const getQuotedData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(BASE_URL, HEADERS);
        console.log("Response", response?.data);
        setQuotesData(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getQuotedData();
    return () => {
      setQuotesData([]);
      setIsLoading(false);
    };
  }, [searchQuotes]);

  return (
    <>
      {isLoading && <p>Loading......</p>}
      <div>
        {" "}
        <form>
          <input
            type="text"
            value={searchQuotes}
            onChange={(e) => setSearchQuotes(e.target.value)}
            placeholder="search quotes.."
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              color: "black",
            }}
          />
        </form>
      </div>
      <div style={{ display: "flex", flexGrow: "inherit", grid: "inherit" }}>
        {quotesData.map((item, index) => {
          return (
            <QuotesCard
              key={index}
              quotes={item?.quote}
              author={item?.author}
              category={item?.category}
            />
          );
        })}
      </div>
    </>
  );
}
