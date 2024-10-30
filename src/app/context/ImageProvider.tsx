"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { readAllImages } from "../actions/file";

interface Props {
  children: ReactNode;
}

interface InitialImageContext {
  images: string[];
  updateImages(images: string[]): void;
  removeOldImage(src: string): void;
}
const context = createContext<InitialImageContext | null>(null);

const ImageProvider: FC<Props> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);

  const updateImages = (data: string[]) => {
    setImages([...data, ...images]);
  };
  const removeOldImage = (src: string) => {
    setImages((old) => old.filter((img) => src !== img));
  };
  useEffect(() => {
    readAllImages().then(setImages);
  }, []);

  return (
    <context.Provider value={{ images, updateImages, removeOldImage }}>
      {children}
    </context.Provider>
  );
};

export const useImages = () => useContext(context);

export default ImageProvider;
