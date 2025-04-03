import axios from "axios"
import { BASE_URL } from "../../lib/constants/server"
import { SearchType } from "./type"

export const ResultService = {
  getScoresByRegistrationNumber: async (number: string): Promise<SearchType | any> => {
    return await axios.get(`${BASE_URL}/results/${number}`)
      .then((res) => {
        return res.data[0]
      })
      .catch((error) => console.error(error.response.data))
  },
  getStatistic: async (): Promise<any> => {
    return await axios.get(`${BASE_URL}/statistic}`)
      .then((res) => {
        return res.data
      })
      .catch((error) => console.error(error.response.data))
  },
  getTopInAGroup: async (): Promise<any> => {
    return await axios.get(`${BASE_URL}/top}`)
      .then((res) => {
        return res.data
      })
      .catch((error) => console.error(error.response.data))
  },
}