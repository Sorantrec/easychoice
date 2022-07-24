import { Dispatch, SetStateAction } from "react";
import IArgumentItem from './ArgumentsSummary/ArgumentsSummaryItem/interfaces/IArgumentItem';

export default interface IArgument {
  choiceTitle: string,
  args: IArgumentItem[],
  name: string,
  setArguments: Dispatch<SetStateAction<Array<IArgumentItem>>>
}