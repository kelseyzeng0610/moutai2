import React from "react";
import ReactDOM from "react-dom";
import Wallet from "./wallet.jsx";
import "../WalletModal.css";

const WalletModal = ({ avatarSrc, bottleCount, onClose }) => {
  return ReactDOM.createPortal(
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
        <Wallet avatarSrc={avatarSrc} bottleCount={bottleCount} />
      </div>
    </div>,
    document.getElementById("wallet-modal")
  );
};

export default WalletModal;
