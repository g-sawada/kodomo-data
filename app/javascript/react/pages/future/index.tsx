import React, { PureComponent }  from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { data_boy } from './data_boy';
import { data_girl } from './data_girl';

const COLORS = ['#F2A2A2', '#F8C68D', '#FFF6A1', '#CBFAAC', '#A6F0F5', '#96B9FF', '#A7A1FF', '#F6C7FF'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 9)] : '#ffffff00',
            stroke: '#999999',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="gray" fontSize={14} stroke='black' strokeWidth={0.2}>
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

export default function Future() {
  return (
    <>
      <h1 className='text-4xl text-bold text-center'>しょうらいのゆめ</h1>
      <p className='text-lg text-left'>おとこのこ👦</p>
      <ResponsiveContainer height={200} minWidth={400}>
        <Treemap 
          data={data_boy}
          dataKey="割合"
          nameKey="職業"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          animationDuration={800}
          content={<CustomizedContent colors={COLORS} />}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
      <div className='my-5'></div>
      <p className='text-lg text-left'>おんなのこ👧</p>
      <ResponsiveContainer height={200} minWidth={400}>
        <Treemap 
          data={data_girl}
          dataKey="割合"
          nameKey="職業"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          animationDuration={800}
          content={<CustomizedContent colors={COLORS} />}>
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>

      <div className='my-5'></div>
      <p className='text-sx text-right'> 出典： 日本FP協会 小学生『将来なりたい職業』ランキング 2023年</p>
    </>
  );
}