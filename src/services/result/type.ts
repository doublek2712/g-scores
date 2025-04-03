
export type SearchType = {
  _id: string,
  scores: { subject: string; score: number }[],
  foreign_language_code: string
}