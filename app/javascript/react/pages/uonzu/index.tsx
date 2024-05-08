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
  Label,
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
      <ResponsiveContainer id="my-recharts-container" height={500} width={500}>
        <ComposedChart
          title=""
          width={500}
          height={400}
          data={data_tokyo}
          margin={{
            top: 50,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          barGap={0}
        >
          <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="24">東京</tspan>
          </text>
          <CartesianGrid 
            strokeDasharray=""
            vertical={false}
            stroke="gray"
            strokeOpacity={0.5}
            fill="white"
            fillOpacity={0.2}
            />
          <XAxis 
            dataKey="month"
            scale="auto"
            stroke="black"
            />
          <YAxis 
            yAxisId={1}
            domain={[0, 700]}
            tickCount={8}
            stroke="black"
            >
            <Label value="降水量" dx={-25} writingMode="tb" fontSize={20} fill="black"/>
            <Label value="ラベル２" fontSize={20} fill="black"/>
          </YAxis>
          <YAxis
            yAxisId={2}
            orientation="right"
            domain={[-30, 40]}
            tickCount={8}
            stroke="black">
            <Label value="気　温" dx={25} writingMode="tb" fontSize={20} fill="black"/>
          </YAxis>
          <Bar 
            yAxisId={1}
            dataKey="rain"
            barSize={50}
            fill="cyan"
            stroke="black"
            strokeWidth={1}
            />
          <Line 
            yAxisId={2}
            isAnimationActive={false}
            type="linear"
            dataKey="temp_ave"
            dot={{ r: 4 }}
            stroke="red"
            strokeWidth={1.5}/>
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
