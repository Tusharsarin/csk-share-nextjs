"use client";
import { useState } from "react";
import "./financialGrid.css";
import IncomeStatement from "./incomeStatement/incomeStatement";
import CashFlow from "./cashFlow/cashFlow";
import BalanceSheet from "./balanceSheet/balanceSheet";
import { FinancialData } from "../share/metricSection/metricSection";

type TabType = "income_statement" | "balance_statement" | "cash_flow";

export interface IncomeStatementData {
  [year: string]: number | string;
  Category: string;
}

export interface BalanceSheetData {
  [year: string]: string | number;
  Assets: string;
}

export interface LiabilitiesData {
  [year: string]: string | number;
  Liabilities: string;
}

export interface CashFlowData {
  [year: string]: string | number;
  Category: string;
}

export interface FinancialRatiosData {
  [year: string]: number | string;
  Ratios: string;
}

export default function FinancialGrid({ data }: { data: FinancialData }) {
  const [activeTab, setActiveTab] = useState<TabType>("income_statement");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="h3">
        Financials <span>(In Cr)</span>
      </div>
      <div>
        <div className="flex tabs-menu finance-menu">
          <div className="tabs-container tabs-content">
            <div
              className={`tab ${
                activeTab === "income_statement" ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick("income_statement")}
            >
              Income Statement
            </div>
            <div
              className={`tab ${
                activeTab === "balance_statement" ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick("balance_statement")}
            >
              Balance Sheet
            </div>
            <div
              className={`tab ${activeTab === "cash_flow" ? "active-tab" : ""}`}
              onClick={() => handleTabClick("cash_flow")}
            >
              Cash Flow
            </div>
            <div className="p-0 no-pad">
              {activeTab === "income_statement" && (
                <IncomeStatement
                  incomeData={data.Financials_Income_Statement || []}
                  ratiosData={data.Financial_Ratios || []}
                />
              )}
              {activeTab === "balance_statement" && (
                <BalanceSheet
                  assetsData={data.Financials_Balance_Sheet || []}
                  liabilitiesData={data.Financial_Liabilities || []}
                />
              )}
              {activeTab === "cash_flow" && (
                <CashFlow cashflowData={data.Financial_Cash_Flow || []} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
