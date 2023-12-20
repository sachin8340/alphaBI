"use client";
import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import './authForm.css';

const gf = new GiphyFetch("GlVGYHkr3WSBnllca54iNt0yFbjz7L65");

const DisplayBoard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [gifs, setGifs] = useState<String[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGifs([]);

    if (inputRef.current?.value) {
      try {
        await gf
          .search(inputRef.current?.value, {
            limit: 12,
          })
          .then((res) => {
            setGifs(res.data.map((gif) => gif.images.original.url));
          });
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert("Please enter a search item");
    }
  };
  return (
    <section className=" p-4 pt-10 md:pt-16 flex flex-col gap-10">
      
      {/*Search Section  */}

      <form
        onSubmit={handleSubmit}
        className="w-full  md:px-10 flex justify-center gap-4 relative"
      >
        <Search
          className="absolute left-[5px] md:left-[46px] text-slate-500 top-[13px]"
          size={15}
        />
        <Input
          ref={inputRef}
          placeholder="Search"
          type="text"
          className="px-7"
        />
        <Button>Search</Button>
      </form>

      {/* Display Board */}

      <div className="w-full p-4 flex flex-wrap md:justify-between justify-center items-center gap-4">
        {gifs.length > 0 &&
          gifs.map((gif, index) => {
            return (
              <div key={index} className="card cardbg w-[300px] h-[300px]">
                <img src={gif as string} alt="" className="w-full h-full" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default DisplayBoard;
