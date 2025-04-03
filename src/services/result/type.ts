
export type SearchType = {
  _id: string,
  scores: { subject: string; score: number }[],
  foreign_language_code: string
}

export type TopScoreType = {
  _id: string,
  totalScore: number
}

export type StatisticType = {
  res_1: { _id: string, count: number }[],
  res_2: { _id: string, count: number }[],
  res_3: { _id: string, count: number }[],
  res_4: { _id: string, count: number }[],
}

