import { useMemo } from "react";
import "./App.css";
import { useStatistics } from "./useStatistics";
import { Chart } from "./Chart";

function App() {
  const statistics = useStatistics(10);

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  const ramUsages = useMemo(
    () => statistics.map((stat) => stat.ramUsage),
    [statistics]
  );

  const storageUsages = useMemo(
    () => statistics.map((stat) => stat.storageUsage),
    [statistics]
  );

  return (
    <>
      <div style={{ height: 120, width: 500 }}>
        <Chart data={cpuUsages} maxDataPoints={10}></Chart>
      </div>
    </>
  );
}

export default App;
