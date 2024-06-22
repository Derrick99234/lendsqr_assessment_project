import brief from "../assets/briefcase 1.svg";
import dashboard from "../assets/home 1.svg";
import user from "../assets/user-friends 1.svg";
import guarantors from "../assets/users 1.svg";
import loan from "../assets/sack 1.svg";
import decision from "../assets/handshake-regular 1.svg";
import saving from "../assets/piggy-bank 1.svg";
import load_request from "../assets/hand-holding 1.svg";
import whitelist from "../assets/user-check 1.svg";
import karma from "../assets/user-times 1.svg";
import briefcase from "../assets/briefcase 1.svg";
import loan_product from "../assets/Group 104.png";
import saving_product from "../assets/Group.png";
import fees from "../assets/coins-solid 1.png";
import transact from "../assets/icon.png";
import service from "../assets/galaxy 1.png";
import acct from "../assets/user-cog 1.png";
import settlement from "../assets/scroll 1.png";
import report from "../assets/chart-bar 2.png";
import arr_down from "../assets/np_next_2236826_000000 2.svg";
import logo from "../assets/Group.svg";
import preference from "../assets/sliders-h 1.png";
import pricing from "../assets/badge-percent 1.svg";
import audit from "../assets/clipboard-list 1.png";

function Sidebar() {
  return (
    <aside>
      <img src={logo} alt="" className="logo" />
      <span className="brief">
        <img src={brief} alt="" />
        Switch Organization
        <img src={arr_down} alt="" />
      </span>
      <span className="dashboard">
        <img src={dashboard} alt="" />
        Dashboard
      </span>
      <div className="costumer">
        <h2>CUSTOMERS</h2>
        <span className="active">
          <img src={user} alt="" />
          Users
        </span>
        <span>
          <img src={guarantors} alt="" />
          Guarantors
        </span>
        <span>
          <img src={loan} alt="" />
          Loans
        </span>
        <span>
          <img src={decision} alt="" />
          Decision Models
        </span>
        <span>
          <img src={saving} alt="" />
          Savings
        </span>
        <span>
          <img src={load_request} alt="" />
          Loan Requests
        </span>
        <span>
          <img src={whitelist} alt="" />
          Whitelist
        </span>
        <span>
          <img src={karma} alt="" />
          Karma
        </span>
      </div>
      <div className="businesses">
        <h2>BUSINESSES</h2>
        <span>
          <img src={briefcase} alt="" />
          Orgainization
        </span>
        <span>
          <img src={loan_product} alt="" />
          Loan Products
        </span>
        <span>
          <img src={saving_product} alt="" />
          Savings Products
        </span>
        <span>
          <img src={fees} alt="" />
          Fees and Charges
        </span>
        <span>
          <img src={transact} alt="" />
          Transactions
        </span>
        <span>
          <img src={service} alt="" />
          Services
        </span>
        <span>
          <img src={acct} alt="" />
          Service Account
        </span>
        <span>
          <img src={settlement} alt="" />
          Settlements
        </span>
        <span>
          <img src={report} alt="" />
          Reports
        </span>
      </div>
      <div className="security">
        <h2>SECURITY</h2>
        <span>
          <img src={preference} alt="" />
          Preferences
        </span>
        <span>
          <img src={pricing} alt="" />
          Fees and Pricing
        </span>
        <span>
          <img src={audit} alt="" />
          Audit Logs
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
