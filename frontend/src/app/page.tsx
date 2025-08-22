"use client"  // if you're using App Router

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface NDVIData {
  date: string;
  ndvi: number;
}

export default function Home() {
  const [data, setData] = useState<NDVIData[]>([]);

  useEffect(() => {
    Papa.parse("/data/ndvi_timeseries.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const parsed = result.data
          .filter((row: any) => row.date && row.ndvi)
          .map((row: any) => ({
            date: row.date,
            ndvi: parseFloat(row.ndvi),
          }));
        setData(parsed);
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-12">
      <h1 className="text-3xl font-bold">Kilifi NDVI Dashboard</h1>

      {/* Earth Engine App iframe */}
      <iframe
        src="https://ee-marina-kilifi.projects.earthengine.app/view/kilifi-ndvi"
        width="100%"
        height="600"
        className="rounded-xl shadow-lg"
      />

      {/* Chart Section */}
      <div className="w-full max-w-4xl h-96">
        <h2 className="text-2xl font-semibold mb-4">NDVI Time Series</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Line type="monotone" dataKey="ndvi" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Download link */}
      <a
        href="/data/ndvi_timeseries.csv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Download NDVI Timeseries Data
      </a>
    </main>
  );
}
