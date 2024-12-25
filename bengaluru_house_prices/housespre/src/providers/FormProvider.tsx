import { useState } from "react";
import { BusinessType } from "../utils/types";
import { FormContext } from "../context/form-context";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<BusinessType>({
    location: "",
    Squareft: 1000,
    uiBHK: 1,
    uiBathrooms: 1,
  });

  const state = {
    handleChange: setFormData,
    data: formData,
  };

  console.log("Chaning ....", formData);

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};
