import { useState } from "react";
import cn from "../../utils/cn";

export default function Overlay({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn({
        "overlay fixed inset-0 z-40 top-0 left-0": true,
        "transition-opacity ease-in-out duration-300": true,
        // "bg-black bg-opacity-20": isOpen,
        // "opacity-0 pointer-events-none": !isOpen,
      })}
      //   onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
}
