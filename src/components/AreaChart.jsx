import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  
  export const AreaChartComponent = ({
    dailyRevenue,
  }) => {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
        <AreaChart
          width={500}
          height={300}
          data={dailyRevenue}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#1551ff" fill="#1551ff" />
        </AreaChart>
      </ResponsiveContainer>
    );
  };