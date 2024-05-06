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
    { "subject": "国語", "like": 8.1, "dislike": 18.4, "fullMark": 50 },
    { "subject": "算数", "like": 17.7, "dislike": 22.8, "fullMark": 50 },
    { "subject": "外国語", "like": 2.8, "dislike": 2.7, "fullMark": 50 },
    { "subject": "理科", "like": 5.1, "dislike": 3.8, "fullMark": 50 },
    { "subject": "社会", "like": 5.2, "dislike": 4.3, "fullMark": 50 },
    { "subject": "保健体育", "like": 21.7, "dislike": 8.1, "fullMark": 50 },
    { "subject": "音楽", "like": 8.8, "dislike": 3.2, "fullMark": 50 },
    { "subject": "図画工作", "like": 17.7, "dislike": 5, "fullMark": 50 },
    { "subject": "ない", "like": 7.4, "dislike": 25.2, "fullMark": 50 }
  ];

  return (
    <>
      <h1 className='text-3xl text-bold text-center mb-2'>すきなかもく・きらいなかもく</h1>
      <ResponsiveContainer height={400} minWidth={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" fontSize={18}/>
          <PolarRadiusAxis angle={10} domain={[0, 30]}/>
          <Radar name="すき" dataKey="like" stroke="#ff84ff" fill="#ff99ff" fillOpacity={0.3} unit='%' />
          <Radar name="きらい" dataKey="dislike" stroke="#84c1ff" fill="#99ccff" fillOpacity={0.3} unit='%'/>
          <Legend wrapperStyle={{fontSize: '20px'}}/>
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
      <div className='my-5'></div>
      <p className='text-sx text-right'>出典：学研教育総合研究所「小学生白書」2023年度10月調査</p>
    </>
  );
}