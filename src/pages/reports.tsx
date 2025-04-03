
import Page from '../components/templates/page/page'
import Card from '../components/molecules/card/card'
import '@styles/main.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, BarProps } from 'recharts';
import vars from '../styles/abstracts/_variables.module.scss'
import Tabs from '../components/molecules/tabs/tabs';
import TabItem from '../components/atoms/tab-item/tab-item';
const data = [
  { name: 'Page A', number: 12812893 },
  { name: 'Page B', number: 5289300 },
  { name: 'Page C', number: 2289300 },
  { name: 'Page D', number: 7812893 },
  { name: 'Page E', number: 9245828 },
  { name: 'Page F', number: 2289300 },
  { name: 'Page G', number: 3289300 },
  { name: 'Page H', number: 9289300 },
  { name: 'Page I', number: 989300 },
];


const Reports = () => {
  const Charts = (
    <Card title='Charts'>

      <div className='reports-chart__container'>
        <Tabs>
          <TabItem label=">=8" active />
          <TabItem label="6-8" />
          <TabItem label="4-6" />
          <TabItem label="<4" />
        </Tabs>
        <ResponsiveContainer width="70%" height={300}>
          <BarChart data={data} >
            <CartesianGrid stroke={vars.grayColor100} vertical={false} />
            <Tooltip cursor={{ fill: vars.primaryColor400, opacity: 0.2 }} />
            <Bar dataKey="number" fill={vars.primaryColor800} radius={[8, 8, 0, 0]} barSize={32} />
            <XAxis dataKey="name" axisLine={false}
              tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={6}
              tickFormatter={(tick) => {
                return (tick / 1000).toLocaleString();
              }}
              unit="k"
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </Card>
  )
  return (
    <Page title='Reports'>
      <div className='reports__container'>
        {Charts}
      </div>
    </Page>
  )
}

export default Reports