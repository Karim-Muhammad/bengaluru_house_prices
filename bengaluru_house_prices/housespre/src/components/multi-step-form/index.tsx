import { useContext, useState } from "react";
import { BusinessType } from "../../utils/types";
import { StepProps } from "./steps";
import Modal from "../modal";
import Overlay from "../modal/Overlay";
import { onSubmitForm } from "../../utils/services";
import { FormContext } from "../../context/form-context";

interface MultiStepFormProps {
  StepComponents: React.FC<StepProps>[];
}

const MultiStepForm = ({ StepComponents }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { data, handleChange } = useContext(FormContext);
  const [state, setState] = useState<BusinessType>({
    location: "",
    Squareft: 0,
    uiBHK: 0,
    uiBathrooms: 0,
  });

  const nextStep = () => setCurrentStep((p) => p + 1);
  const prevStep = () => setCurrentStep((p) => p - 1);

  return (
    <div className="steps">
      <Overlay>
        <Modal>
          <div className="">
            {StepComponents.map((Step, indx) => (
              <>
                <div className="flex flex-wrap">
                  <Step
                    myStep={indx + 1}
                    key={Step.name}
                    currentStep={currentStep}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={state}
                    setFormData={setState}
                    className="step transition-all w-full basis-full shadow-lg p-6 my-3 bg-white rounded-md"
                  />
                </div>
                {currentStep === indx + 1 && (
                  <div className="flex justify-end">
                    <button
                      className="mt-7 py-2 px-4 rounded-md bg-green-400 text-white text-lg hover:bg-green-500"
                      onClick={
                        currentStep === StepComponents.length
                          ? () => onSubmitForm(data, handleChange)
                          : nextStep
                      }
                    >
                      {currentStep === StepComponents.length
                        ? "Submit"
                        : "Next"}
                    </button>
                  </div>
                )}
              </>
            ))}

            <div className="w-full text-xl bg-green-950 text-white p-3 my-3 rounded-lg">
              &gt;{" "}
              {!data.estimated_price ? "No Result yet" : data.estimated_price}
            </div>
          </div>
        </Modal>
      </Overlay>
    </div>
  );
};

export default MultiStepForm;
