import React from "react";
import { BalanceSheetData, LiabilitiesData } from "../financialGrid";

interface BalanceSheetProps {
  assetsData: BalanceSheetData[];
  liabilitiesData: LiabilitiesData[];
}

export default function BalanceSheet({
  assetsData,
  liabilitiesData,
}: BalanceSheetProps) {
  if (
    (!assetsData || assetsData.length === 0) &&
    (!liabilitiesData || liabilitiesData.length === 0)
  ) {
    return <p>No data available</p>;
  }

  const incomeYears =
    assetsData.length > 0
      ? Object.keys(assetsData[0]).filter((key) => key !== "Assets")
      : [];

  const ratiosYears =
    liabilitiesData.length > 0
      ? Object.keys(liabilitiesData[0]).filter((key) => key !== "Liabilities")
      : [];

  return (
    <div>
      {/* Assets Table */}
      <table className="grid-table mb-8">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Assets</th>
            {incomeYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assetsData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Assets}</td>
              {incomeYears.map((year) => (
                <td key={year} className="py-4 px-4">
                  {item[year]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Liabilities Table */}
      <table className="grid-table">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Liabilities</th>
            {ratiosYears.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {liabilitiesData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.Liabilities}</td>
              {ratiosYears.map((year) => (
                <td key={year} className="py-4 px-4">
                  {item[year] !== undefined ? item[year] : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
