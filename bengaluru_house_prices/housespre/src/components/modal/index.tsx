import ReactDOM from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>,
    document.querySelector("#modal")!
  );
}
