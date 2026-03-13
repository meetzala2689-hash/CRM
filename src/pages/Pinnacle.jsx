import React from "react";
import Sidebar from "../components/Sidebar";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Pinnacle() {
  // Card base style
  const cardStyle = {
    width: "320px",
    margin: "15px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  };

  // Example chart data
  const leadsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Leads",
        data: [12, 19, 8, 15, 10],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales",
        data: [30, 20, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const revenueData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000, 4000, 9000],
        // backgroundColor: "rgba(255, 99, 132, 0.7)",
        backgroundColor: ["#FFCE56 ", "#383837", "#6beb30", "#53f0fc"],
      },
    ],
  };

  const growthData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Growth",
        data: [5, 10, 7, 12],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const leadsPieData = {
    labels: ["New", "Returning"],
    datasets: [
      {
        label: "Leads Type",
        data: [60, 40],
        backgroundColor: ["#f263ff", "#36A2EB"],
      },
    ],
  };

  // Reusable renderCard with optional list
  const renderCard = (title, chartComponent, key, listItems = []) => {
    const [hover, setHover] = React.useState(false);
    return (
      <div
        key={key}
        style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h5>{title}</h5>
        {chartComponent}
        {listItems.length > 0 && (
          <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
            {listItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="d-flex border-end">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h2>Dashboard</h2>
        <div className="d-flex flex-wrap">
          {renderCard(
            "Leads Generated",
            <Bar key="leadsChart" data={leadsData} />,
            "leads",
            ["John Doe", "Jane Smith", "Acme Corp"],
          )}

          {renderCard(
            "Sales Distribution",
            <Pie key="salesChart" data={salesData} />,
            "sales",
            ["Top Product: Product C", "Region: North America"],
          )}

          {renderCard(
            "Quarterly Revenue",
            <Doughnut key="revenueChart" data={revenueData} />,
            "revenue",
            ["Q4 highest revenue", "Q1 lowest revenue"],
          )}

          {renderCard(
            "Weekly Growth",
            <Line key="growthChart" data={growthData} />,
            "growth",
            ["Best week: Week 4", "Slow week: Week 3"],
          )}

          {renderCard(
            "Leads Type",
            <Pie key="leadsPieChart" data={leadsPieData} />,
            "leadsPie",
            ["New: 60%", "Returning: 40%"],
          )}
        </div>
      </div>
    </div>
  );
}

export default Pinnacle;
