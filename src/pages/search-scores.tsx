import React, { FormEvent, useState } from 'react'
import Page from '../components/templates/page/page'
import Card from '../components/molecules/card/card'
import Input from '../components/atoms/input/input'
import { SearchIcon } from 'lucide-react'
import Label from '../components/atoms/label/label'
import Table from '../components/atoms/table/table'
import '@styles/main.scss'
import Button from '../components/atoms/button/button'
import { useMutation } from '@tanstack/react-query'
import { ResultService } from '../services/result/api'
import { SearchType } from '../services/result/type'


const SearchScores = () => {

  const [searchValue, setSearchValue] = useState<string>("");
  const [result, setResult] = useState<SearchType>()

  const searchMutation = useMutation({
    mutationKey: ['search-scores'],
    mutationFn: (number: string) => ResultService.getScoresByRegistrationNumber(number),
    onSuccess: (res) => {
      setResult(res)
    }
  })

  const handleRegistrationNumberSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchMutation.mutate(searchValue)
  }

  const UserRegistration = (
    <Card title='User registration'>
      <Label text='Registration number' />
      <form className='element-group--fluid' onSubmit={handleRegistrationNumberSubmit}>
        <Input
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          type='number'
          left={<SearchIcon />}
          right={<span>Press enter</span>}
          inline fluid
          tabIndex={0}
        />
        <Button
          type='submit'
          text="Search"
          left={<SearchIcon />}
        />
      </form>
    </Card>
  )
  const DetailedScores = (
    <Card title='Detailed scores'>
      {searchMutation.isPending ? <div>...Loading</div> :
        !result ?
          <div>Not thing to display. Search a number!</div>
          :
          <Table >
            <thead>
              <tr>
                {result.scores.map(i => (
                  <td>{i.subject}</td>
                ))}
                <td>ma_ngoai_ngu</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {result.scores.map(i => (
                  <td>{i.score}</td>
                ))}
                <td>{result.foreign_language_code}</td>
              </tr>
            </tbody>
          </Table>
      }

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