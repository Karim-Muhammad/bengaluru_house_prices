import { useContext, useEffect, useState } from "react";
import { StepProps } from ".";
import cn from "../../../utils/cn";
import { FormContext } from "../../../context/form-context";

const BedroomsInput = ({ currentStep, myStep, className }: StepProps) => {
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
      <h2 className="text-lg font-bold my-3">
        Please can you enter how many bathrooms you want in your house?
      </h2>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((count) => (
          <div key={count}>
            <input
              className="hidden"
              type="radio"
              id={`radio-bath-${count}`}
              name="uiBathrooms"
              value={data.uiBathrooms}
              onChange={(evt) => {
                console.log(evt.target);
                handleChange((p) => {
                  return {
                    ...p,
                    [evt.target.name]: count,
                  };
                });
              }}
              checked={data.uiBHK === count}
            />
            <label
              className={cn({
                "p-3 my-3 bg-green-700 text-white hover:bg-white border hover:border-green-700 hover:text-green-700":
                  true,
                "bg-white border-green-700 text-green-700":
                  data.uiBathrooms === count,
              })}
              htmlFor={`radio-bath-${count}`}
            >
              {count}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomsInput;
