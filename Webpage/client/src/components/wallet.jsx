import React from "react";
import '../WalletModal.css';
import {useState,useEffect,useContext} from 'react';
import Web3 from 'web3';
import{TransactionContext} from '../context/TransactionContext';




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
    <div className = "wallet-container">
      <img src={avatarSrc} alt="Avatar" className = "avatar" />

      <div className="owned-bottles">
      <h3>Owned Bottles:</h3>
     
      
    </div>

    </div>
  );
};

export default Wallet;
