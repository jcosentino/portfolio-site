export namespace IReduxTypes {
  export interface ActionDispatch {
    type: string,
    payload: string
  }

  export interface TabState {
    activeTab: string;
  }
}
