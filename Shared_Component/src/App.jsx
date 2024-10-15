import Form from "./Components/Form";
import { Routes, Route } from "react-router-dom";
import FormData from "./Components/FormData";

export default function App() {
  return (
    <Routes>
      <Route element={<Form />} path="/" />
      <Route element={<FormData />} path="/form-data" />
    </Routes>
  );
}
