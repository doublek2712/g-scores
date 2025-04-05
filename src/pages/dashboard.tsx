
import Page from '../components/templates/page/page'
import { useQuery } from '@tanstack/react-query'
import { ResultService } from '../services/result/api'
import '@styles/main.scss'
import { TopScoreType } from '../services/result/type'
import Card from '../components/molecules/card/card'
const Dashboard = () => {

  const topScoresQuery = useQuery({
    queryKey: ['top-scores'],
    queryFn: async () => {
      const res = await ResultService.getTopInAGroup()
      if (res.statusCode) {
        return null
      }
      return res
    },
  })
  return (
    <Page title='Dashboard'>
      <Card title="Leaderboard">
        {topScoresQuery.isPending ? <span>...Loading</span> :
          !topScoresQuery.data ? <span>.Opps</span> : topScoresQuery.data.map((i: TopScoreType) => (
            <div>{i._id}</div>
          ))
        }
      </div>
    </Page>
  )
}

export default Dashboard
