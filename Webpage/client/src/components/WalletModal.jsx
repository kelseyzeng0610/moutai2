import React from "react";
import ReactDOM from "react-dom";
import Wallet from "./wallet.jsx";
import "./wallet.css";

const WalletModal = ({ avatarSrc, bottleCount, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="wallet-modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="wallet-modal bg-white p-6 rounded-md shadow-lg max-w-2xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Wallet avatarSrc={avatarSrc} bottleCount={bottleCount} />
      </div>
    </div>,
    document.getElementById("wallet-modal")
  );
};

export default WalletModal;

