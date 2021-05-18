import { AlertLevels } from "./alert-levels.enum";

export interface Alert {
  text:string;
  level:AlertLevels,
  visible:boolean
}
