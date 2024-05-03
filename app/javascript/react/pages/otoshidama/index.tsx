import React from 'react';
import { 
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer } from 'recharts';

  const otoshidama_data = [
    { "rank": 1, "prefecture": "三重", "amount": 17588 },
    { "rank": 2, "prefecture": "群馬", "amount": 15194 },
    { "rank": 3, "prefecture": "沖縄", "amount": 13814 },
    { "rank": 4, "prefecture": "福井", "amount": 13753 },
    { "rank": 5, "prefecture": "岩手", "amount": 13392 },
    { "rank": 6, "prefecture": "奈良", "amount": 13153 },
    { "rank": 7, "prefecture": "富山", "amount": 12934 },
    { "rank": 8, "prefecture": "福岡", "amount": 12931 },
    { "rank": 9, "prefecture": "福島", "amount": 12643 },
    { "rank": 10, "prefecture": "香川", "amount": 12486 },
    { "rank": 11, "prefecture": "宮崎", "amount": 11623 },
    { "rank": 12, "prefecture": "広島", "amount": 11648 },
    { "rank": 13, "prefecture": "佐賀", "amount": 11479 },
    { "rank": 14, "prefecture": "岡山", "amount": 11159 },
    { "rank": 15, "prefecture": "山梨", "amount": 10970 },
    { "rank": 16, "prefecture": "神奈川", "amount": 10291 },
    { "rank": 17, "prefecture": "鹿児島", "amount": 10105 },
    { "rank": 18, "prefecture": "東京", "amount": 10098 },
    { "rank": 19, "prefecture": "滋賀", "amount": 9917 },
    { "rank": 20, "prefecture": "愛媛", "amount": 9704 },
    { "rank": 21, "prefecture": "千葉", "amount": 9678 },
    { "rank": 22, "prefecture": "徳島", "amount": 9278 },
    { "rank": 23, "prefecture": "栃木", "amount": 9139 },
    { "rank": 24, "prefecture": "熊本", "amount": 8971 },
    { "rank": 25, "prefecture": "大分", "amount": 8916 },
    { "rank": 26, "prefecture": "愛知", "amount": 8835 },
    { "rank": 27, "prefecture": "鳥取", "amount": 8656 },
    { "rank": 28, "prefecture": "大阪", "amount": 8430 },
    { "rank": 29, "prefecture": "京都", "amount": 8354 },
    { "rank": 30, "prefecture": "長崎", "amount": 8080 },
    { "rank": 31, "prefecture": "新潟", "amount": 7890 },
    { "rank": 32, "prefecture": "石川", "amount": 7771 },
    { "rank": 33, "prefecture": "高知", "amount": 7622 },
    { "rank": 34, "prefecture": "兵庫", "amount": 7425 },
    { "rank": 35, "prefecture": "和歌山", "amount": 7397 },
    { "rank": 36, "prefecture": "長野", "amount": 7233 },
    { "rank": 37, "prefecture": "静岡", "amount": 6951 },
    { "rank": 38, "prefecture": "茨城", "amount": 6811 },
    { "rank": 39, "prefecture": "山口", "amount": 6581 },
    { "rank": 40, "prefecture": "宮城", "amount": 6125 },
    { "rank": 41, "prefecture": "青森", "amount": 5919 },
    { "rank": 42, "prefecture": "岐阜", "amount": 5866 },
    { "rank": 43, "prefecture": "島根", "amount": 5707 },
    { "rank": 44, "prefecture": "埼玉", "amount": 5396 },
    { "rank": 45, "prefecture": "秋田", "amount": 5203 },
    { "rank": 46, "prefecture": "山形", "amount": 3919 },
    { "rank": 47, "prefecture": "北海道", "amount": 3648 },
    { "rank": 48, "prefecture": "全国", "amount": 10724 }
];

// const renamed_otoshidama_data = otoshidama_data.map(item => {
//   return {
//     ...item,
//     "金額": item.amount,
//   };
// })

export default function Otoshidama() {
  return (
    <>    
    <h1 className='text-4xl text-bold text-center'>おとしだま</h1>
      <ResponsiveContainer height={400} minWidth={400}>
        <BarChart
          width={500}
          height={300}
          data={otoshidama_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="prefecture"/>
        <YAxis domain={[0, 20000]}/>
        <Tooltip />
        <Legend 
          verticalAlign="top" 
          wrapperStyle={{ lineHeight: '40px', fontSize: '20px' }}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" startIndex={0} endIndex={9}  height={50} stroke="#8884d8" />
        <Bar 
          dataKey="amount" 
          name="金額" 
          fill="#9f9cdf" 
          unit="円"  />
      </BarChart>
    </ResponsiveContainer>
    <div className='my-5'></div>
    <p className='text-sx text-right'>出典：総務省統計局「家計調査 家計収支編」 勤労世帯1月の「贈与金」</p>
  </>
  );
}