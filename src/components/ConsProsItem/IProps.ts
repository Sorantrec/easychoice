import { Dispatch, SetStateAction } from "react";
import IItem from './../Item/interfaces/IItem';
export default interface IProps {
  choiceTxt: string,
  items: IItem[],
  itemsName: string,
  setItems: Dispatch<SetStateAction<Array<IItem>>>
}