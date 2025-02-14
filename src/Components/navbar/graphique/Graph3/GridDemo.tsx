import { LineChart } from "@mui/x-charts/LineChart";
import { dataset } from "./Graph3";
import "./../GrapheStyle.scss"
import { useTranslation } from "react-i18next";
export default function GridDemo() {
  const {t} = useTranslation();
  return (
    <div className="Top-Client">
      <p>{t("top-Client")}</p>
      <LineChart
        dataset={dataset}
        xAxis={[{ dataKey: "x" }]}
        series={[{ dataKey: "y" }]}
        height={230}
        margin={{ left: 20, right: 20, top: 20, bottom: 40 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
