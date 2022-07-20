export default interface IChoice {
  suggestion: string,
  txt: string,
  details: {
    cons: number,
    hint: string
    pros: number,
  }
}