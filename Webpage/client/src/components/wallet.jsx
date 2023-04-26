import React from "react";
import "./wallet.css";
import {useState,useEffect,useContext} from 'react';
import{TransactionContext} from '../context/TransactionContext';
import WalletList from "./WalletList";




const Wallet = ({ avatarSrc, bottleCount }) => {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    sendTransaction,
    handleChange,
    isLoading,
    ownedBottles,
    getUserBottles
  } = useContext(TransactionContext);
 avatarSrc = "../images/avatar2.png"

  useEffect(() => {
    console.log('getting user bottles');
    getUserBottles();
  }, [currentAccount]);

  console.log('Rendering Wallet component...'); // Add this line
  console.log('Owned Bottles:', ownedBottles); 
  
  return (
    <div className="wallet-page bg-gray-50 h-full">
      <div className="wallet-container bg-white shadow-md rounded-md p-6 h-full">
        <img
          src={avatarSrc}
          alt="Avatar"
          className="avatar w-24 h-24 rounded-full mx-auto mb-6"
        />

        <div className="current-account">
          <h3 className="text-xl font-semibold mb-4">Current Account:</h3>
          <p>{currentAccount}</p>
        </div>

        <WalletList ownedBottles={ownedBottles} />

      </div>
    </div>
  );
};

export default Wallet;
