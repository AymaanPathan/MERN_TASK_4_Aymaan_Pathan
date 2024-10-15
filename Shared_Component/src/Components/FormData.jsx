/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function FormData() {
  const location = useLocation();
  const { textValue, textAreaValue, checkboxValue, selectedOption } =
    location.state || {};

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-white via-gray-400 to-blue-500">
      <div className="p-6 w-96 border border-transparent rounded-2xl bg-blue-50 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-400">
          Thank you for your feedback!
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Here's your feedback data:
        </p>
        <div className="space-y-4">
          <p className="text-gray-500 ">
            Name: <span className="text-blue-500"> {textValue} </span>
          </p>

          <p className="text-gray-500 ">
            Subscribe to Newsletter:
            <span className="text-blue-500">
              {checkboxValue ? "Yes" : "No"}
            </span>
          </p>
          <p className="text-gray-500">
            Satisfaction:
            <span className="text-blue-500">{selectedOption}</span>
          </p>
          <p className="text-gray-500">
            Feedback:
            <span className="text-blue-500"> {textAreaValue}</span>
          </p>
        </div>
        <Link to={"/"}>
          <button className="mt-4 w-full bg-blue-500 text-white px-2 py-2 rounded-xl hover:brightness-95 duration-200">
            Back To Form
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FormData;
