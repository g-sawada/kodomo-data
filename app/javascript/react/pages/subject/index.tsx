import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  Legend, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer, 
  Tooltip} from 'recharts';


export default function Population() {
  const data = [
    { "subject": "国語", "like": 12.9, "dislike": 22.9, "fullMark": 50 },
    { "subject": "算数", "like": 25.3, "dislike": 24.8, "fullMark": 50 },
    { "subject": "外国語", "like": 2.4, "dislike": 2.6, "fullMark": 50 },
    { "subject": "理科", "like": 7.3, "dislike": 3.1, "fullMark": 50 },
    { "subject": "社会", "like": 3.8, "dislike": 4.1, "fullMark": 50 },
    { "subject": "保健体育", "like": 12.9, "dislike": 5.8, "fullMark": 50 },
    { "subject": "音楽", "like": 8.3, "dislike": 2.4, "fullMark": 50 },
    { "subject": "図画工作", "like": 15.2, "dislike": 2.7, "fullMark": 50 },
    { "subject": "なし", "like": 9, "dislike": 27.1, "fullMark": 50 }
  ];
  const labelFormatter = (value) => { return value + ' %'};

  return (
    <ResponsiveContainer height={400} minWidth={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontSize={18}/>
        <PolarRadiusAxis angle={10} domain={[0, 30]}/>
        <Radar name="好き" dataKey="like" stroke="#ff84ff" fill="#ff99ff" fillOpacity={0.3} unit='%' />
        <Radar name="嫌い" dataKey="dislike" stroke="#84c1ff" fill="#99ccff" fillOpacity={0.3} unit='%'/>
        <Legend wrapperStyle={{fontSize: '20px'}}/>
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}