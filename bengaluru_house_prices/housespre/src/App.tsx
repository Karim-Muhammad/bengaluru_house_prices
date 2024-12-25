import MultiStepForm from "./components/multi-step-form";
import { InputStepsComponents } from "./components/multi-step-form/steps";
import { FormProvider } from "./providers/FormProvider";

// CSS
import "./App.css";

function App() {
  return (
    <div className="global-wrapper max-height relative z-10">
      <h1 className="text-4xl text-slate-400 font-bold font-serif text-center my-7">
        Bengaluru House Prices{" "}
      </h1>

      <FormProvider>
        <div className="container">
          <MultiStepForm StepComponents={InputStepsComponents} />
        </div>
      </FormProvider>
    </div>
  );
}
export default App;
