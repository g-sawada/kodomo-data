import React from 'react';
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer } from 'recharts';

  export default function FiftyMeter() {
    const data = [
      { "年度": 1965, "7歳男子": null, "7歳女子": null, "11歳男子": 8.8, "11歳女子": 9.2, "13歳男子": 8.1, "13歳女子": 8.9 },
      { "年度": 1970, "7歳男子": null, "7歳女子": null, "11歳男子": 8.8, "11歳女子": 9.1, "13歳男子": 8, "13歳女子": 8.7 },
      { "年度": 1975, "7歳男子": null, "7歳女子": null, "11歳男子": 8.8, "11歳女子": 9.1, "13歳男子": 7.9, "13歳女子": 8.7 },
      { "年度": 1980, "7歳男子": null, "7歳女子": null, "11歳男子": 8.77, "11歳女子": 9.04, "13歳男子": 8.01, "13歳女子": 8.64 },
      { "年度": 1985, "7歳男子": 10.3, "7歳女子": 10.68, "11歳男子": 8.75, "11歳女子": 9, "13歳男子": 7.9, "13歳女子": 8.57 },
      { "年度": 1988, "7歳男子": 10.35, "7歳女子": 10.69, "11歳男子": 8.79, "11歳女子": 9.06, "13歳男子": 7.96, "13歳女子": 8.72 },
      { "年度": 1993, "7歳男子": 10.52, "7歳女子": 10.72, "11歳男子": 8.76, "11歳女子": 9.08, "13歳男子": 8.01, "13歳女子": 8.72 },
      { "年度": 1998, "7歳男子": 10.78, "7歳女子": 11.02, "11歳男子": 8.93, "11歳女子": 9.26, "13歳男子": 8, "13歳女子": 8.82 },
      { "年度": 1999, "7歳男子": 10.73, "7歳女子": 11.04, "11歳男子": 8.93, "11歳女子": 9.26, "13歳男子": 7.96, "13歳女子": 8.89 },
      { "年度": 2000, "7歳男子": 10.81, "7歳女子": 11.1, "11歳男子": 8.89, "11歳女子": 9.24, "13歳男子": 7.95, "13歳女子": 8.9 },
      { "年度": 2001, "7歳男子": 10.83, "7歳女子": 11.1, "11歳男子": 9.03, "11歳女子": 9.26, "13歳男子": 7.98, "13歳女子": 8.92 },
      { "年度": 2002, "7歳男子": 10.78, "7歳女子": 11.09, "11歳男子": 8.96, "11歳女子": 9.26, "13歳男子": 7.95, "13歳女子": 8.85 },
      { "年度": 2003, "7歳男子": 10.83, "7歳女子": 11.01, "11歳男子": 8.91, "11歳女子": 9.25, "13歳男子": 7.97, "13歳女子": 8.8 },
      { "年度": 2004, "7歳男子": 10.76, "7歳女子": 11.01, "11歳男子": 8.89, "11歳女子": 9.22, "13歳男子": 7.94, "13歳女子": 8.75 },
      { "年度": 2005, "7歳男子": 10.76, "7歳女子": 11.05, "11歳男子": 8.95, "11歳女子": 9.2, "13歳男子": 7.91, "13歳女子": 8.76 },
      { "年度": 2006, "7歳男子": 10.71, "7歳女子": 11, "11歳男子": 8.89, "11歳女子": 9.22, "13歳男子": 7.91, "13歳女子": 8.84 },
      { "年度": 2007, "7歳男子": 10.8, "7歳女子": 11.12, "11歳男子": 8.91, "11歳女子": 9.19, "13歳男子": 7.94, "13歳女子": 8.79 },
      { "年度": 2008, "7歳男子": 10.65, "7歳女子": 11.08, "11歳男子": 8.88, "11歳女子": 9.23, "13歳男子": 7.92, "13歳女子": 8.78 },
      { "年度": 2009, "7歳男子": 10.66, "7歳女子": 10.97, "11歳男子": 8.9, "11歳女子": 9.23, "13歳男子": 7.91, "13歳女子": 8.75 },
      { "年度": 2010, "7歳男子": 10.69, "7歳女子": 11.03, "11歳男子": 8.82, "11歳女子": 9.17, "13歳男子": 7.88, "13歳女子": 8.81 },
      { "年度": 2011, "7歳男子": 10.68, "7歳女子": 10.98, "11歳男子": 8.88, "11歳女子": 9.18, "13歳男子": 7.83, "13歳女子": 8.72 },
      { "年度": 2012, "7歳男子": 10.62, "7歳女子": 10.91, "11歳男子": 8.81, "11歳女子": 9.13, "13歳男子": 7.89, "13歳女子": 8.73 },
      { "年度": 2013, "7歳男子": 10.61, "7歳女子": 10.93, "11歳男子": 8.9, "11歳女子": 9.12, "13歳男子": 7.85, "13歳女子": 8.75 },
      { "年度": 2014, "7歳男子": 10.58, "7歳女子": 10.95, "11歳男子": 8.85, "11歳女子": 9.16, "13歳男子": 7.78, "13歳女子": 8.66 },
      { "年度": 2015, "7歳男子": 10.7, "7歳女子": 10.94, "11歳男子": 8.78, "11歳女子": 9.12, "13歳男子": 7.84, "13歳女子": 8.74 },
      { "年度": 2016, "7歳男子": 10.65, "7歳女子": 10.99, "11歳男子": 8.79, "11歳女子": 9.16, "13歳男子": 7.82, "13歳女子": 8.66 },
      { "年度": 2017, "7歳男子": 10.61, "7歳女子": 10.94, "11歳男子": 8.79, "11歳女子": 9.12, "13歳男子": 7.8, "13歳女子": 8.66 },
      { "年度": 2018, "7歳男子": 10.55, "7歳女子": 10.9, "11歳男子": 8.78, "11歳女子": 9.12, "13歳男子": 7.77, "13歳女子": 8.59 },
      { "年度": 2019, "7歳男子": 10.59, "7歳女子": 10.93, "11歳男子": 8.87, "11歳女子": 9.15, "13歳男子": 7.8, "13歳女子": 8.62 },
      { "年度": 2020, "7歳男子": 10.65, "7歳女子": 11.06, "11歳男子": 8.91, "11歳女子": 9.17, "13歳男子": 7.9, "13歳女子": 8.79 },
      { "年度": 2021, "7歳男子": 10.55, "7歳女子": 10.89, "11歳男子": 8.84, "11歳女子": 9.16, "13歳男子": 7.78, "13歳女子": 8.66 },
      { "年度": 2022, "7歳男子": 10.59, "7歳女子": 10.95, "11歳男子": 8.94, "11歳女子": 9.26, "13歳男子": 7.83, "13歳女子": 8.76 }
  ];

    return (
      <>    
        <h1 className='text-4xl text-bold text-center'>５０めーとるそう</h1>
        <ResponsiveContainer height={400} minWidth={400}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="年度" unit="年度"/>
            <YAxis domain={[7, 11.5]} tickCount={10}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="7歳男子" stroke="#8884d8" activeDot={{ r: 3 }} unit="秒"/>
            <Line type="monotone" dataKey="7歳女子" stroke="#aba8e3" activeDot={{ r: 3 }} />
            <Line type="monotone" dataKey="11歳男子" stroke="#d88884" activeDot={{ r: 3 }} />
            <Line type="monotone" dataKey="11歳女子" stroke="#e7b7b5" activeDot={{ r: 3 }} />
            <Line type="monotone" dataKey="13歳男子" stroke="#90db93" activeDot={{ r: 3 }} />
            <Line type="monotone" dataKey="13歳女子" stroke="#b5e7b7" activeDot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className='my-5'></div>
        <p className='text-sx text-right'>出典：総務省統計局「体力・運動能力調査」</p>
      </>
    );
  }

