import {
  createStore,
  action,
  type Action,
  createTypedHooks,
  type Computed,
  computed,
} from 'easy-peasy';
import { type IExerciseItem } from '../interfaces';

// makes it easier for the app to type the store
const typedHooks = createTypedHooks<exerciseModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

interface exerciseModel {
  exercises: IExerciseItem[];
  setExercises: Action<exerciseModel, IExerciseItem[]>;
  exerciseSearchResults: IExerciseItem[];
  setExerciseSearchResults: Action<exerciseModel, IExerciseItem[]>;
  getExerciseDetails: Computed<
    exerciseModel,
    (id: string | undefined) => IExerciseItem | undefined
  >;
}

const store = createStore<exerciseModel>({
  exercises: [],
  setExercises: action((state, payload) => {
    state.exercises = payload;
  }),
  exerciseSearchResults: [],
  setExerciseSearchResults: action((state, payload) => {
    console.log(state.exerciseSearchResults);
    state.exerciseSearchResults = payload;
  }),
  getExerciseDetails: computed((state) => {
    return (id: string | undefined) =>
      state.exercises.find((exerciseItem) => exerciseItem.id === id);
  }),
});

export default store;
