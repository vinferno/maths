import {selectedActions, SelectedReducer} from './selected/selected-state';
import {optionsActions, OptionsReducer} from './options/options-state';

export const reducers = {
  selectedState: SelectedReducer,
  optionsState: OptionsReducer,
};

export const stateActions = {
  selectedActions,
  optionsActions,
};
