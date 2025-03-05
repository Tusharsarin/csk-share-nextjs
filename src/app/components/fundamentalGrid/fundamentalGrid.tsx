import { Fundamentals } from "../share/metricSection/metricSection";

interface FundamentalProps {
  data: Fundamentals[];
}

export default function FundamentalGrid({ data }: FundamentalProps) {
  if (!data || data.length === 0) {
    return <p>No fundamental data available.</p>;
  }

  const midpoint = Math.ceil(data.length / 2);

  return (
    <div>
      <div className="h3">Fundamentals</div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          {data.slice(0, midpoint).map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span className="font-medium">{item.Parameter}</span>
              <span>{item.Value}</span>
            </div>
          ))}
        </div>

        <div>
          {data.slice(midpoint).map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span className="font-medium">{item.Parameter}</span>
              <span>{item.Value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
