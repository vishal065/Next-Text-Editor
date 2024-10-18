import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { FileUploader } from "react-drag-drop-files";
import { IoCloudUploadOutline } from "react-icons/io5";
import GalleryImage from "./GalleryImage";

interface Props {
  visible: boolean;
  onClose(state: boolean): void;
}

const ImageGallery: FC<Props> = ({ visible, onClose }) => {
  const handleClose = () => {
    onClose(!visible);
  };

  if (!visible) return null;
  return (
    <div
      tabIndex={-1}
      onKeyDown={({ key }) => {
        // this will only work when tabindex is added
        if (key === "Escape") handleClose();
      }}
      className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50"
    >
      <div className="relative md:w-[760px] w-[80%] h-[80%] bg-white rounded-md p-4 overflow-y-auto ">
        <div className=" absolute right-4 top-4 p-2 z-50">
          <button>
            <IoMdClose onClick={handleClose} />
          </button>
        </div>
        <FileUploader
          handleChange={(file:File) => {}}
          name="file"
          types={["png", "jpg", "webp"]}
        >
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg> */}
                <IoCloudUploadOutline size={30} className="text-gray-500" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </FileUploader>
        <p className="p-4 text-center text-2xl font-semibold opacity-45">
          No Images to Display
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 ">
          <GalleryImage src="https://docs.weweb.io/assets/npm1.CZGvc_og.png" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
