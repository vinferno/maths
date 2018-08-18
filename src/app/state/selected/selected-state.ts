export interface SelectedState {
  group: string;
  item: string;
  config: any;
}

const defaultState: SelectedState = {
  group: '',
  item: '',
  config: {},
};

export const SELECTED_UPDATE_GROUP = '[selected] update group';
export const SELECTED_UPDATE_ITEM = '[selected] update item';
export const SELECTED_UPDATE_CONFIG = '[selected] update config';
export const SELECTED_RESET = '[selected] reset';

const types = {
  SELECTED_UPDATE_GROUP,
  SELECTED_UPDATE_ITEM,
  SELECTED_UPDATE_CONFIG
};
export const selectedActions = {
  updateGroup: (payload: any) => {
    return {type: SELECTED_UPDATE_GROUP, payload};
  },
  updateItem: (payload: any) => {
    return {type: SELECTED_UPDATE_ITEM, payload};
  },
  updateConfig: (payload: any) => {
    return {type: SELECTED_UPDATE_CONFIG, payload};
  },
  reset: (payload: any) => {
    return {type: SELECTED_RESET, payload};
  },
  types,
};

export function SelectedReducer(state: SelectedState = defaultState, action: any) {
  if (!action.type.includes('[selected]')) {
    return state;
  }
  switch (action.type) {
    case SELECTED_UPDATE_GROUP:
      return {...state, ...{group: action.payload, ...{type: action.type}} };
    case SELECTED_UPDATE_ITEM:
      return {...state, ...{item: action.payload, ...{type: action.type}} };
    case SELECTED_UPDATE_CONFIG:
      return {...state, ...{config: action.payload, ...{type: action.type}} };
    case SELECTED_RESET:
      return {...defaultState};
    default:
      return {...state, type: action.type};
  }
}
