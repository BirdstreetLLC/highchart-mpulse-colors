"use client"
import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import { colors, data } from "@/app/consts/consts";

export const ChartComponent = () => {
  const chartContainerRef = useRef(null) as any;

  useEffect(() => {
    Highcharts.setOptions({
    colors: colors
    });
    const chart = Highcharts.chart({
      chart: {
        renderTo: chartContainerRef.current,
      },
      title: {
        text: "Casey's Example Colors",
      },
      xAxis: {
        categories: ["Color Pallette"],
      },
      yAxis: {
        title: {
          text: "Colors",
        },
      },
      series: data
      
    });
  }, []);

  return (
    <div className="p-4">
     <div ref={chartContainerRef} className="w-full h-[400px]">
    </div>
    <pre className={`w-full p-4 bg-[#1F1F1F]`}>
            <ul>
                {colors.map((color, index) => (
                    <li key={index} style={{ color: color }}>
                    {color}
                    </li>
                ))}
            </ul>
        </pre>
    </div>
  );
};