"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { data as kodams } from "../lib/data";

export default function Home() {
  const [name, setName] = useState("");
  const [selectedKodam, setSelectedKodam] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    document.title = "Cek Kodam";
    if (name) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * kodams.length);
    setSelectedKodam(kodams[randomIndex].kodam);
    setIsDisabled(true);
  };

  return (
    <main
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="flex min-h-screen flex-col items-center justify-center p-80"
    >
      <div
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_1280.jpg')",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div
          style={{ width: "550px" }}
          className="fixed left-0 top-0 flex w-full justify-center border-b mb-16 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          <p className="font-mono font-bold text-2xl">
            Khodam: {selectedKodam}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
        <div>
          <label className="text-zinc-50">Masukkan Namamu: </label>
          <div className="mt-2">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Andi"
            />
          </div>
        </div>
        <Button disabled={isDisabled} type="submit">
          Cek Khodam
        </Button>
      </form>
    </main>
  );
}
