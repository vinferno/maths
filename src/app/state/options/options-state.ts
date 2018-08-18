export interface OptionsState {
  groups: string[];
  items: string[];
}

const defaultState: OptionsState = {
  groups: [],
  items: [],
};

export const OPTIONS_UPDATE_GROUPS = '[options] update groups';
export const OPTIONS_UPDATE_ITEMS = '[options] update items';
export const OPTIONS_RESET = '[options] reset';

const types = {
  OPTIONS_UPDATE_GROUPS,
  OPTIONS_UPDATE_ITEMS,
  OPTIONS_RESET,
};
export const optionsActions = {
  updateGroups: (payload: any) => {
    return {type: OPTIONS_UPDATE_GROUPS, payload};
  },
  updateItems: (payload: any) => {
    return {type: OPTIONS_UPDATE_ITEMS, payload};
  },
  reset: (payload: any) => {
    return {type: OPTIONS_RESET, payload};
  },
  types,
};

export function OptionsReducer(state: OptionsState = defaultState, action: any) {
  if (!action.type.includes('[options]')) {
    return state;
  }
  switch (action.type) {
    case OPTIONS_UPDATE_GROUPS:
      return {...state, ...{groups: action.payload, ...{type: action.type}} };
    case OPTIONS_UPDATE_ITEMS:
      return {...state, ...{items: action.payload, ...{type: action.type}} };
    case OPTIONS_RESET:
      return {...defaultState};
    default:
      return {...state, type: action.type};
  }
}
