import { createContext, Dispatch, SetStateAction } from "react";
import { BusinessType } from "../utils/types";

export const FormContext = createContext<{
  handleChange: Dispatch<SetStateAction<BusinessType>>;
  data: BusinessType;
}>({
  handleChange: () => {},
  data: {
    location: "",
    Squareft: 1000,
    uiBHK: 1,
    uiBathrooms: 1,
  } as BusinessType,
});
