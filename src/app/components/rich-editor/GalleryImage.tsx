import { BiCheck, BiSolidTrash } from "react-icons/bi";

interface Props {
  src: string;
  onDeleteClick?(): void;
  onSelectClick?(): void;
}

function GalleryImage({ src, onDeleteClick, onSelectClick }: Props) {
  return (
    <div className="w-full relative aspect-square overflow-hidden rounded">
      <img className="w-full h-full object-cover" src={src} alt="" />
      <div className="hidden flex group-hover:flex absolute bottom-0 left-0 right-0">
        <button
          onClick={onDeleteClick}
          className="flex flex-1 bg-red-400 items-center justify-center p-2"
        >
          <BiSolidTrash />
        </button>
        <button
          onClick={onSelectClick}
          className="flex flex-1 bg-blue-400 items-center justify-center p-2"
        >
          <BiCheck />
        </button>
      </div>
    </div>
  );
}

export default GalleryImage;
