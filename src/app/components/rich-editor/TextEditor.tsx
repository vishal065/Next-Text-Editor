"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import Tools from "./Tools";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import ImageGallery from "./ImageGallery";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

function TextEditor() {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const extensions = [
    StarterKit,
    Underline,
    Link.configure({
      openOnClick: false,
      autolink: false, //khud false kiya h
      // defaultProtocol: "https",
      linkOnPaste: true,
      HTMLAttributes: {
        target: "",
      },
    }),
    Image.configure({
      inline: false,
      HTMLAttributes: {
        class: "w-[80%] mx-auto",
      },
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Placeholder.configure({
      // Use a placeholder:
      placeholder: "Write something …",
      // Use different placeholders depending on the node type:
      // placeholder: ({ node }) => {
      //   if (node.type.name === 'heading') {
      //     return 'What’s the title?'
      //   }

      //   return 'Can you add some further context?'
      // },
    }),
  ];
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none",
      },
    },
    // content: `<h1>hello <strong>world</strong></h1>`,
  });
  // editor?.commands.setContent("") //agar database se data aa rha h toh useeffect se set kr krdegy
  const onImageSelect = (image: string) => {
    editor
      ?.chain()
      .focus()
      .setImage({ src: image, alt: "This is an image" })
      .run();
  };
  return (
    <>
      <div className="h-screen flex flex-col space-y-6">
        <div className=" sticky top-0 bg-white z-50">
          <Tools
            editor={editor}
            onImageSelection={() => setShowImageGallery(true)}
          />
        </div>
        <div className="flex-1">
          <EditorContent editor={editor} className="h-full" />
        </div>
      </div>
      <ImageGallery
        onSelect={onImageSelect}
        visible={showImageGallery}
        onClose={setShowImageGallery}
      />
    </>
  );
}

export default TextEditor;

//if want to set provider
{
  /* <EditorProvider
  extensions={[StarterKit]}
  content={`<h1>hello <strong>world</strong></h1>`}
/>; */
}
