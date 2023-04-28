import React, { useState,useContext } from "react";
import { TransactionContext} from '../context/TransactionContext';


const Input = ({ placeholder, name, type, value, handleChange }) => (
    
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


const ChangeValuePage = () => {
  const {isLoading,changeValue } = useContext(TransactionContext);
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
 
 

 const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayValue(inputValue);
    setInputValue("");
    changeValue(inputValue);

  };

  const handleClose = () => {
    setShowChangeValuePage(false);
    
  };

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
    <button className="absolute top-3 right-3 font-bold text-xl text-gray-500" onClick={handleClose}>X</button>
      <Input placeholder=" New Value Amount (ETH)" name="new_value" type="number" handleChange={handleChange} />
      <div>Your value: {displayValue}</div>
   
    <div className="h-[1px] w-full bg-gray-400 my-2" />
      
    {isLoading
      ? <Loader />
      : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          confirm
        </button>
      )}
       </div>

  );
};


export default ChangeValuePage;
  