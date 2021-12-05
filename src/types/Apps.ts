export interface IMail {
  profilePicture: string;
  username: string;
  date: string;

  title: string;
  content: string[];
  hasBeenRead: boolean;
}

export interface ICommandList {
  [key: string]: (args: string[]) => void;
}

export type IStreamSetter = 
  React.Dispatch<React.SetStateAction<string[]>>
