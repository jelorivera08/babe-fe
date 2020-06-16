import React, { useState, useEffect } from "react";
import AdminDashboard from "./components/Admin";
import RegionalStockistDashboard from "./components/RegionalStockistDashboard";
import ProvincialStockistDashboard from "./components/ProvincialStockistDashboard";
import ResellerDashboard from "./components/ResellerDashboard";
import SubresellerDashboard from "./components/SubresellerDashboard";

const DashBoard = () => {
  const [accountType, setUserType] = useState("");

  useEffect(() => {
    const accountTypeFromLocStorage = window.localStorage.getItem(
      "accountType"
    );
    if (accountTypeFromLocStorage) {
      setUserType(accountTypeFromLocStorage);
    } else {
      setUserType(false);
    }
  }, [accountType]);

  const renderDashboard = (type) => {
    switch (type) {
      case "ADMIN":
        return <AdminDashboard />;
      case "Regional Stockist":
        return <RegionalStockistDashboard />;
      case "Provincial Stockist":
        return <ProvincialStockistDashboard />;
      case "Reseller":
        return <ResellerDashboard />;
      case "Sub-reseller":
        return <SubresellerDashboard />;
      default:
        return <div>random dashboard</div>;
    }
  };

  return <div>{renderDashboard(accountType)}</div>;
};

export default DashBoard;
