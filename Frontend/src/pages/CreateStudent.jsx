import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/student/createStudent", {
        name,
        standard,
      });
      toast.success("Student created successfully");
      navigate("/studentList");
    } catch (error) {
      toast.error("Error creating student");
      console.log(error)
    }
  };

  return (
    <dic className="flex justify-center items-center w-full h-[90vh]">
      <form onSubmit={handleSubmit} className="w-1/3 flex flex-col gap-3 justify-center items-center">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 border border-pink-500 p-2 h-[2rem] block w-full rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
        />

        <input
          type="text"
          placeholder="Standard"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          required
          className="mt-1 block w-full p-2 border h-[2rem] border-pink-500 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-4 w-1/2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Submit
        </button>
      </form>
    </dic>
  );
};

export default CreateStudent;
