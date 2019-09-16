// tslint:disable-next-line: eofline
// stateとfirestoreに送られるmarkdownオブジェクトのinterfaceを書いていく

export interface State {
  login_user: object | null;
  isLoading: boolean;
  theme: {
    dark: boolean,
  };
  markdowns: object[];
}

export interface Markdown {
  id: string;
  markdownText: string;
}
