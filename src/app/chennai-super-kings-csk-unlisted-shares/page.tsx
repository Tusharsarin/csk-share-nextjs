import Faq from "../components/faq/faq";
import ShareHeader from "../components/share/shareHeader/shareHeader";
import ShareMetric from "../components/share/shareMetric/shareMetric";
import "./shares.css";

export default function Share() {
  return (
    <div>
      <ShareHeader />
      <div className="metric-padding">
        <ShareMetric />
      </div>
      <Faq />
    </div>
  );
}
