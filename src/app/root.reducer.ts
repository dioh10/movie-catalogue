import { Action, createReducer, on } from "@ngrx/store";
import { setPageTitle } from "./root.actions";
import { PageTitle } from "./types";

interface State {
  // Somehow there's an issue
  // when we declare pageTitle as primitive string
  // or as String object
  // Therefore, the value is wrapped under an object
  // as temporary solution
  pageTitle: PageTitle;
}

export const initialState: State = {
  pageTitle: { value: "🎥 Movie Catalogue" }
};

const _rootReducer = createReducer(
  initialState,
  on(setPageTitle, (state: State, pageTitle: PageTitle) => {
    return {
      ...state,
      pageTitle
    };
  })
);

export const rootReducer = (state: State, action: Action) =>
  _rootReducer(state, action);
