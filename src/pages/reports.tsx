
import Page from '../components/templates/page/page'
import Card from '../components/molecules/card/card'
import '@styles/main.scss'
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import vars from '../styles/abstracts/_variables.module.scss'
import Tabs from '../components/molecules/tabs/tabs';
import { useQuery } from '@tanstack/react-query';
import { ResultService } from '../services/result/api';
import { useState } from 'react';
import { StatisticType } from '../services/result/type';

const Reports = () => {

  const [level, setLevel] = useState<0 | 1 | 2 | 3>(0)

  const statisticQuery = useQuery({
    queryKey: ['statistic'],
    queryFn: () => ResultService.getStatistic()
  })

  const data = (queryData: StatisticType) => {

    switch (level) {
      case 0: return queryData.res_1
      case 1: return queryData.res_2
      case 2: return queryData.res_3
      case 3: return queryData.res_4
    }

  }

  const Charts = (
    <Card title='Charts'>

      <div className='reports-chart__container'>
        <Tabs labels={['>=8', '6-8', '4-6', '<4']} active={level} onChange={setLevel} />
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={statisticQuery.data ? data(statisticQuery.data) : undefined} >
            <CartesianGrid stroke={vars.grayColor100} vertical={false} />
            <Tooltip cursor={{ fill: vars.primaryColor400, opacity: 0.2 }} />
            <Bar dataKey="count" fill={vars.primaryColor800} radius={[8, 8, 0, 0]} barSize={32} />
            <XAxis dataKey="_id" axisLine={false}
              tickLine={false}
            // tickFormatter
            />
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
        {statisticQuery.isPending ?
          <span>...Loading</span>
          :
          Charts}
      </div>
    </Page>
  )
}

export default Reports