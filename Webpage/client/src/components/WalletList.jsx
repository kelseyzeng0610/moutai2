import WalletItem from "./walletitem";
import "./wallet.css";
const list = [
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#FA996E" }}></i>
    ),
    label: "BTC",
    name: "Bitcoin",
    value: "5.040000",
    usd: "$35 578.91",
  },
  {
    icon: (
      <i
        className="Icon ri-copper-diamond-fill"
        style={{ color: "#353535" }}
      ></i>
    ),
    label: "ETH",
    name: "Ethereum",
    value: "160.020000",
    usd: "$36 578.91",
  },
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#9B9B9B" }}></i>
    ),
    label: "LTC",
    name: "Litecoin",
    value: "135.890000",
    usd: "$7 035.02",
  },
  {
    icon: <i className="Icon ri-stack-fill" style={{ color: "#EBBA23" }}></i>,
    label: "BNB",
    name: "Binancecoin",
    value: "5.040000",
    usd: "$35 578.91",
  },
];
    const WalletList = () => {
        return (
          <div className="w-full px-5">
            <p className="text-lg font-semibold text-gray-600 my-5">Wallets</p>
            <div className="flex justify-between items-center mt-10">
              <div className="flex items-center space-x-1 text-gray-600">
                <p>USD</p>
                <i className="ri-arrow-drop-down-line"></i>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-base text-gray-600 mb-1">
                  $ 159 001.212
                </p>
                <p className="text-sm font-semibold text-gray-400 mt-1">
                  Total Balance
                </p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-7" />
            <div>
              {list.map((item, i) => (
                <WalletItem key={i} {...item} />
              ))}
            </div>
          </div>
        );
      };      
export default WalletList;  