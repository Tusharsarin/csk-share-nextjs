import { CashFlowData } from "../financialGrid";

interface CashFlowProps {
  cashflowData: CashFlowData[];
}

export default function CashFlow({ cashflowData }: CashFlowProps) {
  const years = cashflowData[0]
    ? Object.keys(cashflowData[0]).filter((key) => key !== "CashFlow_Statement")
    : [];

  return (
    <div>
      <table className="grid-table">
        <thead>
          <tr>
            <th className="text-left py-4 px-4">Cash-Flow Statement</th>
            {years.map((year) => (
              <th key={year} className="text-left py-4 px-4">
                {year}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {cashflowData.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-4">{item.CashFlow_Statement}</td>
              {years.map((year) => (
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
