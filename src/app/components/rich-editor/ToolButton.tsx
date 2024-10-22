import clsx from "clsx";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  active?: boolean;
  onClick?(): void;
}

const ToolButton: FC<Props> = ({ children, active, onClick }) => {
  return (
    <button
      className={clsx(
        "p-2",
        active ? "bg-black text-white text-lg scale-105 rounded" : "text-black"
      )}
      onClick={() => {
        onClick!();
        console.log(active);
        console.log(children);
      }}
    >
      {children}
    </button>
  );
};

export default ToolButton;
