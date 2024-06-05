"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [fact, setFact] = useState("");
  const getFact = () => {
    axios
      .get("https://meowfacts.herokuapp.com/")
      .then((res) => {
        console.log(res.data.data[0]);
        setFact(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Card className="w-[400px] p-5 flex flex-col gap-5 justify-center">
        <CardTitle>Generate a cat fact</CardTitle>
        <div className="h-full rounded-lg border bg-card text-card-foreground p-3 flex justify-center">
          <p>{fact}</p>
        </div>
        <div className="flex w-full justify-end">
          <Button
            className="w-full"
            style={{
              backgroundColor: "#f5dc00",
              color: "black",
            }}
            onClick={getFact}
          >
            Generate
          </Button>
        </div>
      </Card>
    </main>
  );
}
