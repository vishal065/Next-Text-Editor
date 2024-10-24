"use client";
import React, { useState } from "react";
import ToolButton from "./ToolButton";
import { BiLink } from "react-icons/bi";

interface Props {
  onSubmit(link: string): void;
}

function LinkForm({ onSubmit }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [Link, setLink] = useState(``);
  return (
    <div>
      <ToolButton onClick={() => setShowForm(true)}>
        <BiLink size={20} />
      </ToolButton>
      {showForm && (
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
            className="bg-white ml-1"
            onClick={() => {
              setLink(``);
              setShowForm(false);
            }}
            onMouseDown={() => {
              onSubmit(Link);
            }}
          >
            ok
          </button>
        </div>
      )}
    </div>
  );
}

export default LinkForm;
