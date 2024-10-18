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
      className={clsx("p-2", active ? "bg-black text-white" : "text-black")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToolButton;
