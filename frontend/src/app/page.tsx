"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/kilifi_ndvi_summary.csv")
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.split("\n").slice(1); // skip header
        const parsed = rows.map((row) => {
          const [date, ndvi] = row.split(",");
          return { date, ndvi: parseFloat(ndvi) };
        });
        setData(parsed);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Marina Dashboard</h1>

      {/* Earth Engine iframe */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <iframe
          src='https://ee-marina-kilifi.projects.earthengine.app/view/kilifi-ndvi'
          width="100%"
          height="500"
          style={{ border: "none" }}
        />
      </div>
    </main>
  );
}
