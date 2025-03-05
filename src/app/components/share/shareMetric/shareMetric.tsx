import InterestFormSection from "../../interestForm/interestFormSection/interestFormSection";
import MetricSection from "../metricSection/metricSection";
import "./shareMetric.css";

export default function ShareMetric() {
  return (
    <div className="flex gap reverse-flex">
      <MetricSection />
      {/* <InterestFormSection /> */}
    </div>
  );
}
