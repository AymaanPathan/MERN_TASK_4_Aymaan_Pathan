import { useState } from "react";
import InputComponent from "./InputComponent";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxValue(e.target.checked);
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textValue || !textAreaValue || !checkboxValue || !selectedOption) {
      return toast.error("Please Provide All Form Values");
    }

    toast.success("Form Submitted");
    console.log({
      textValue,
      textAreaValue,
      checkboxValue,
      selectedOption,
    });

    navigate("/form-data", {
      state: {
        textValue,
        textAreaValue,
        checkboxValue,
        selectedOption,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mt-4 mx-auto w-96 p-6 border border-blue-300 rounded-3xl shadow-md"
    >
      <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">
        Feedback Form
      </h2>

      <InputComponent
        type="text"
        name="name"
        value={textValue}
        onChange={handleTextChange}
        className="mb-4"
        label="Your Name"
      />

      <InputComponent
        type="checkbox"
        name="subscribe"
        checked={checkboxValue}
        onChange={handleCheckboxChange}
        className="mb-4"
        label="Subscribe to Newsletter"
      />

      <InputComponent
        type="radio"
        name="satisfaction"
        value={selectedOption}
        onChange={handleRadioChange}
        options={[
          { value: "worst", label: "1" },
          { value: "Bad", label: "2" },
          { value: "Not Bad", label: "3" },
          { value: "Good", label: "4" },
          { value: "Best", label: "5" },
        ]}
        className="mb-4"
        label="Rate your satisfaction:"
      />

      <InputComponent
        type="textarea"
        name="feedback"
        value={textAreaValue}
        onChange={handleTextAreaChange}
        className="mb-4"
        label="Your Feedback"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 text-white rounded-3xl bg-blue-600 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
