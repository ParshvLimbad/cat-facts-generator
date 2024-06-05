import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Card className="w-[400px] h-[250px] p-5 flex flex-col gap-5 justify-center">
        <CardTitle>Generate a cat fact</CardTitle>
        <div className="h-full rounded-lg border bg-card text-card-foreground p-3 flex justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          quisquam nemo vitae magnam accusamus
        </div>
        <div className="flex w-full justify-end">
          <Button
            className="w-full"
            style={{
              backgroundColor: "#f5dc00",
              color: "black",
            }}
          >
            Generate
          </Button>
        </div>
      </Card>
    </main>
  );
}
