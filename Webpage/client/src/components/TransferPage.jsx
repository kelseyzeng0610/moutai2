import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import wine from "../../images/Wine.png";


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

 

const TransferPage = ({setShowTransferPage}) => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    
    const { addressTo, amount, propertyID } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !propertyID) return;
    sendTransaction();
    
    };
    const handleClose = () => {
        setShowTransferPage(false);
      };

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
         <button className="absolute top-3 right-3 font-bold text-xl text-gray-500" onClick={handleClose}>X</button>
      <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
      <Input placeholder="Property ID" name="propertyID" type="number" handleChange={handleChange} />

      <div className="h-[1px] w-full bg-gray-400 my-2" />
      
      {isLoading
        ? <Loader />
        : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        )}
    </div>
  );
        };

export default TransferPage;
