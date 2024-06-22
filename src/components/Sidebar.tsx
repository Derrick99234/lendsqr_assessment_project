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
import loan_product from "../assets/Group.png";

function Sidebar() {
  return (
    <aside>
      <span className="brief">
        <img src={brief} alt="" />
        Switch Organization
      </span>
      <span className="dashboard">
        <img src={dashboard} alt="" />
        Dashboard
      </span>
      <div className="costumer">
        <h2>CUSTOMERS</h2>
        <span>
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
          <img src={loan} alt="" />
          Savings Products
        </span>
        <span>
          <img src={decision} alt="" />
          Fees and Charges
        </span>
        <span>
          <img src={saving} alt="" />
          Transactions
        </span>
        <span>
          <img src={load_request} alt="" />
          Services
        </span>
        <span>
          <img src={whitelist} alt="" />
          Service Account
        </span>
        <span>
          <img src={karma} alt="" />
          Settlements
        </span>
        <span>
          <img src={karma} alt="" />
          Reports
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
