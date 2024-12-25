import { useContext, useEffect, useState } from "react";
import { StepProps } from ".";
import cn from "../../../utils/cn";
import { FormContext } from "../../../context/form-context";

const AreaInput = ({ currentStep, myStep, className }: StepProps) => {
  const isVisible = currentStep === myStep;
  const [isVisited, setIsVisited] = useState(isVisible);
  const { data, handleChange } = useContext(FormContext);

  useEffect(() => {
    if (isVisible) setIsVisited(true);
  }, [isVisible, isVisited]);

  console.log("IsVisited", isVisited);

  return (
    <div
      className={cn({
        [className ?? ""]: true,
        "invisible opacity-0": !isVisited,
        "visible opacity-100": isVisible || isVisited,
      })}
    >
      <h2>
        <label className="text-lg font-bold" htmlFor="uiSqft">
          Please enter the Area (in sq ft) of your room:
        </label>
        <span className="text-xs text-gray-600">e.g., 1234 sq ft</span>
      </h2>
      <input
        type="number"
        className="area w-5/6 p-3 outline-none border-b-black border"
        id="uiSqft"
        name="Squareft"
        value={data.Squareft}
        onChange={(evt) =>
          handleChange((p) => ({ ...p, [evt.target.name]: evt.target.value }))
        }
      />

      <span className="text-md font-medium mx-3">sq ft</span>
    </div>
  );
};

export default AreaInput;
