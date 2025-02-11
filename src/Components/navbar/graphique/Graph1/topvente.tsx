// import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./Graphique1";
import "./../GrapheStyle.scss";
import { useTranslation } from "react-i18next";
export default function PieArcLabel() {
  const {t} = useTranslation();
  return (
    <div className="Top-Store">
      <p>{t("top-Produit")}</p>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            ...data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </div>
  );
}

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
