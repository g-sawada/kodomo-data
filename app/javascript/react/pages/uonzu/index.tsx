import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import { data_tokyo } from './tokyo';

const customizedAxisTick = (props) => {
  const { x, y, width, visibleTicksCount, payload } = props;
  const _width = width / visibleTicksCount;
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={(_width / 2)} y={0} width={_width} height={30}>
        {payload.value}
      </foreignObject>
    </g>  );
}

export default function Uonzu() {
  const style = {fontFamily: "sans-serif, serif"}; //sans-serif→ゴシック，serif→明朝
  return (
    <div style={style}>
      <ResponsiveContainer height={500} width={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data_tokyo}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid 
            strokeDasharray="10 30"
            vertical={false}
            />
          <XAxis 
            dataKey="month"
            scale="auto"
            />
          <YAxis 
            yAxisId={1}
            label={{value: "降水量", angle: -90, dx: -20}}
            domain={[0, 700]}
            tickCount={8}
            />
          <YAxis
            yAxisId={2}
            orientation="right"
            label={{value: "気　温", angle: 90, dx: 20}}
            domain={[-30, 40]}
            tickCount={8}/>
          <Bar yAxisId={1} dataKey="rain" barSize={20} fill="#413ea0" />
          <Line yAxisId={2} type="monotone" dataKey="temp_ave" stroke="red" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
