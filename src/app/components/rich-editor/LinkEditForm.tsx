"use client";
import React, { useEffect, useState } from "react";
import { BiUnlink } from "react-icons/bi";

interface Props {
  initialState?: string;
  onSubmit(link: string): void;
}

function LinkEditForm({ onSubmit, initialState }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [Link, setLink] = useState(initialState || ``);

  useEffect(() => {
    if (initialState) {
      setLink(initialState);
    }
  }, [initialState]);

  return (
    <div>
      <div className=" absolute flex top-10 z-50 ring-1 ring-black p-2 rounded shadow-sm bg-white outline-none">
        <input
          type="text"
           value={Link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://url.com"
          className=" outline-none"
          onBlur={() => setShowForm(false)}
        />
        <button
          className="bg-black text-white p-2 rounded w-8 aspect-square flex justify-center items-center"
          onClick={() => {
            setLink(``);
            setShowForm(false);
          }}
          onMouseDown={() => {
            onSubmit(Link);
          }}
        >
          ok
          <BiUnlink />
        </button>
      </div>
    </div>
  );
}

export default LinkEditForm;
