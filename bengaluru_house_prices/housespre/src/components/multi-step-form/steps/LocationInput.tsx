import { ChangeEvent, useContext, useEffect, useState } from "react";
import { StepProps } from ".";
import cn from "../../../utils/cn";
import LocationsOptions from "../../locations-options";
import { FormContext } from "../../../context/form-context";

const LocationInput = ({ currentStep, myStep, className }: StepProps) => {
  const isVisible = currentStep === myStep;
  const [isVisited, setIsVisited] = useState(isVisible);
  const { handleChange } = useContext(FormContext);

  useEffect(() => {
    if (isVisible) setIsVisited(true);
  }, [isVisible, isVisited]);

  const locationChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    handleChange((p) => ({ ...p, [target.name]: target.value }));
  };
  console.log("IsVisited", isVisited);

  return (
    <div
      className={cn({
        [className ?? ""]: true,
        "invisible opacity-0": !isVisited,
        "visible opacity-100": isVisible || isVisited,
      })}
    >
      <div>
        <h2 className="text-xl font-bold">Location</h2>
        <LocationsOptions onChange={locationChangeHandler} />
      </div>
    </div>
  );
};

export default LocationInput;
