// import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "../Graph2/Graph";
import "./../GrapheStyle.scss"
import { useTranslation } from "react-i18next";

const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 400,
};

export default function TopVente() {
  const {t,i18n} = useTranslation();
  return (
    <div className="Top-Vente">
      <p>{t("top-Vente")}</p>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }]}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
      />
    </div>
  );
}
