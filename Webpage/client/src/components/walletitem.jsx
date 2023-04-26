import "./wallet.css";
import React from "react";
import {useState} from 'react';
import TransferPage from './TransferPage';

const WalletItem = ({ propId, value }) => {
    const[showTransferPage, setShowTransferPage] = useState(false);
    
const handleTransferClick = () => {
        setShowTransferPage(true);
};

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="p-2.5 bg-white rounded-full">
          <img src="/images/wine.png" alt="Wine Bottle" className="h-5 w-5 text-gray-400" />
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-600">Property ID</p>
          <p className="text-xs font-semibold text-gray-400">{propId}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold text-sm text-gray-600">{value} ETH</p>
        <div className="flex space-x-2 mt-2">
          <button className="bg-green-500 text-white py-1 px-2 rounded font-semibold text-xs"onClick={handleTransferClick}>Transfer</button>
          <button className="bg-blue-500 text-white py-1 px-2 rounded font-semibold text-xs">Change Value</button>
        </div>
      </div>
      {showTransferPage && <TransferPage setShowTransferPage={setShowTransferPage} />}
    </div>
  );
};

export default WalletItem;

  



  

