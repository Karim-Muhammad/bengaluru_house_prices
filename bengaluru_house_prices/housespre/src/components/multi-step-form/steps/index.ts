import { BusinessType } from "../../../utils/types";

export type StepProps = {
  myStep: number;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: {
    [key: string]: unknown;
  };
  setFormData: (state: BusinessType) => void;
  className?: string;
};

import AreaInput from "./AreaInput";
import BathroomsInput from "./BedroomsInput";
import BedroomsInput from "./BathroomsInput";
import LocationInput from "./LocationInput";

export const InputStepsComponents = [
  AreaInput,
  BathroomsInput,
  BedroomsInput,
  LocationInput,
];
