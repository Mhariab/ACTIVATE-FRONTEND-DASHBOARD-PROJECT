import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  LineChart,
  Line,
  ReferenceLine,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Products",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Categories",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Categories",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Alert",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Products",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Customers",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div class Name="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card-iicon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div class Name="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card-iicon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div class Name="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card-iicon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div class Name="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card-iicon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
