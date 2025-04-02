import React from 'react'
import Page from '../components/templates/page/page'
import Card from '../components/molecules/card/card'
import Input from '../components/atoms/input/input'
import { SearchIcon } from 'lucide-react'
import Label from '../components/atoms/label/label'
import Table from '../components/atoms/table/table'
import '@styles/main.scss'
import Button from '../components/atoms/button/button'


const SearchScores = () => {

  const UserRegistration = (
    <Card title='User registration'>
      <Label text='Registration number' />
      <div className='element-group--fluid'>
        <Input
          left={<SearchIcon />}
          right={<span>Press enter</span>}
          inline fluid
        />
        <Button
          text="Search"
          left={<SearchIcon />}
        />
      </div>
    </Card>
  )
  const DetailedScores = (
    <Card title='Detailed scores'>
      <Table >
        <thead>
          <tr>
            <td>ss</td>
            <td>ss</td>
            <td>ss</td>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>ss</td>
            <td>ss</td>
            <td>ss</td>
          </tr>
          <tr>
            <td>ss</td>
            <td>ss</td>
            <td>ss</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
  const SearchHistory = (
    <Card title='History'>

    </Card>
  )
  return (
    <Page title='Search scores'>
      <div className='search-scores__container'>
        <div className='search-scores__first-ele'>
          {UserRegistration}
          {DetailedScores}
        </div>
        <div className='search-scores__second-ele'>
          {SearchHistory}
        </div>
      </div>

    </Page>
  )
}

export default SearchScores