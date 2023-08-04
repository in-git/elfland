export interface Technology {
  src: string;
  name: string;
  unlock: string;
  cost: number;
  desc: string;
  /* 需要花费 */
  spend: string;
  /* 是否完成，当研究完成后，隐藏该项 */
  isFinished: boolean;
}
