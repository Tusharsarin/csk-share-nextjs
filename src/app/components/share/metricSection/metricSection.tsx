"use client";
import FinancialGrid, {
  BalanceSheetData,
  CashFlowData,
  FinancialRatiosData,
  IncomeStatementData,
  LiabilitiesData,
} from "../../financialGrid/financialGrid";
import FundamentalGrid from "../../fundamentalGrid/fundamentalGrid";
import InterestFormSection from "../../interestForm/interestFormSection/interestFormSection";
import PromoterGrid from "../../promoterGrid/promoterGrid";
import ShareholdingGrid from "../../shareholdingGrid/shareholdingGrid";
import AboutShare from "../aboutShare/aboutShare";
import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";
import ShareOverview from "../shareOverview/shareOverview";
import "./metricSection.css";
import { useEffect, useState } from "react";

export interface Fundamentals {
  Parameter: string;
  Value: string;
}

export interface Shareholding_Pattern {
  [year: string]: number | string;
  Shareholders: string;
}

export interface Promoter_Or_Management {
  Name: string;
  Designation: string;
  Experience: string;
  Linkedin: string;
}

export interface FinancialData {
  Financials_Income_Statement?: IncomeStatementData[];
  Financial_Ratios?: FinancialRatiosData[];
  Financials_Balance_Sheet?: BalanceSheetData[];
  Financial_Liabilities?: LiabilitiesData[];
  Financial_Cash_Flow?: CashFlowData[];
  Fundamentals?: Fundamentals[];
  Shareholding_Pattern?: Shareholding_Pattern[];
  Promoters_or_Management?: Promoter_Or_Management[];
}

export default function MetricSection() {
  const [shareData, setShareData] = useState<FinancialData>({});

  useEffect(() => {
    fetch("/api/getInitialData")
      .then((res) => res.json())
      .then((data) => setShareData(data))
      .catch((err) => console.error("Failed to fetch data", err));
  }, []);

  return (
    <div className="flex-1 grid-row-gap">

      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="lg:w-2/3 w-full">
          <ShareOverview />
          <ShareMetricGraph />
        </div>
        <InterestFormSection />
      </div>
      <div className="flex flex-col gap-10 w-full lg:w-2/3">

      <AboutShare />
      <FundamentalGrid data={shareData.Fundamentals || []} />
      <FinancialGrid data={shareData || {}} />
      <ShareholdingGrid data={shareData.Shareholding_Pattern || []} />
      <PromoterGrid data={shareData.Promoters_or_Management || []} />
      </div>
    </div>
  );
}
