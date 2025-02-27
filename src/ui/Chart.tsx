import { useMemo } from "react";
import { BaseChart } from "./BaseChart";

export type ChartProps = {
  data: number[];
  maxDataPoints: number;
};

export function Chart(props: ChartProps) {
  const preparedData = useMemo(() => {
    const points = props.data.map((point) => {
      return { value: point * 1000 };
    });
    return [
      ...points,
      ...Array.from({ length: props.maxDataPoints - points.length }).map(
        () => ({ value: undefined })
      ),
    ];
  }, [props.data]);

  return (
    <BaseChart data={preparedData} fill="#0A4D5C" stroke="#5DD4EE"></BaseChart>
  );
}
