import React from "react";
import parse from "html-react-parser";

const post = ``;
function page() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none">
        {parse(post)}
      </div>
    </div>
  );
}

export default page;
