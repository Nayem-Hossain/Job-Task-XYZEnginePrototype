import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOneForm from "./components/StepOneForm";
import StepTwoForm from "./components/StepTwoForm";
import ShowResults from "./components/ShowResults";

const App = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isReadable, setIsReadable] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    csvFile: null,
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("file : ", file)

    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = (e) => {
        // Read file data
        const csvData = e.target.result;
        // console.log("data : ",csvData);

        // Split by line break to gets rows Array
        const allRows = csvData.split("\n");
        console.log("all rows : ", allRows);

        let maxX = -Infinity;
        let minX = Infinity;
        let maxY = -Infinity;
        let minY = Infinity;
        let maxZ = -Infinity;
        let minZ = Infinity;

        for (let row = 1; row < allRows.length; row++) {
          // Split by comma (,) to get row as an Array
          const rowValues = allRows[row].split(",");
          console.log("row values : ", rowValues);

          if (rowValues.length >= 4) {
            const x = parseFloat(rowValues[1]);
            console.log("all values of column X: ", x);
            const y = parseFloat(rowValues[2]);
            console.log("all values of column Y: ", x);
            const z = parseFloat(rowValues[3]);
            console.log("all values of column Z: ", z);

            maxX = Math.max(maxX, x);
            minX = Math.min(minX, x);
            maxY = Math.max(maxY, y);
            minY = Math.min(minY, y);
            maxZ = Math.max(maxZ, z);
            minZ = Math.min(minZ, z);
          }
        }
        setFormData((prevData) => ({
          ...prevData,
          csvFile: file,
          max_X: maxX.toString(),
          min_X: minX.toString(),
          max_Y: maxY.toString(),
          min_Y: minY.toString(),
          max_Z: maxZ.toString(),
          min_Z: minZ.toString(),
        }));
        setIsReadable(true);
      };
    } else {
      alert("Please select a csv file.");
    }
  };
  console.log("Maximum of X", formData.max_X);

  const handleSubmitFormStep1 = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const handleSubmitFormStep2 = (event) => {
    event.preventDefault();
    // Handle form submission and processing
    if (
      formData.max_X != "" ||
      formData.min_X != "" ||
      formData.max_Y != "" ||
      formData.min_Y != "" ||
      formData.max_Z != "" ||
      formData.min_Z != ""
    ) {
      setIsSubmit(true);
    } else {
      alert("please fill the input field !");
    }
  };
  return (
    <>
        {isSubmit ? (
          <ShowResults results={formData} />
        ) : (
          <div className="flex items-center justify-center">
            {step === 1 && (
              <StepOneForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmitFormStep1={handleSubmitFormStep1}
              ></StepOneForm>
            )}
            {step === 2 && (
              <StepTwoForm
                isReadable={isReadable}
                isSubmit={isSubmit}
                formData={formData}
                handleFileUpload={handleFileUpload}
                handleInputChange={handleInputChange}
                handleSubmitFormStep2={handleSubmitFormStep2}
              ></StepTwoForm>
            )}
          </div>
        )}
    </>
  );
};

export default App;
