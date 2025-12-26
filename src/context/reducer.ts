import type { AppState, AppAction } from './types';
import { seedMachines } from '../data/seedMachines';

export const initialState: AppState = {
  machines: seedMachines,
  deletedMachine: null,
  showForm: false,
  editingMachine: undefined,
  searchTerm: '',
  statusFilter: 'all',
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_MACHINE': {
      const newMachine = {
        ...action.payload,
        id: Date.now().toString(),
        updatedAt: new Date(),
      };
      return { ...state, machines: [...state.machines, newMachine] };
    }
    case 'UPDATE_MACHINE': {
      const updatedMachines = state.machines.map(m =>
        m.id === action.payload.id
          ? { ...m, ...action.payload.updates, updatedAt: new Date() }
          : m
      );
      return { ...state, machines: updatedMachines };
    }
    case 'DELETE_MACHINE': {
      const machineToDelete = state.machines.find(m => m.id === action.payload) || null;
      return {
        ...state,
        machines: state.machines.filter(m => m.id !== action.payload),
        deletedMachine: machineToDelete,
      };
    }
    case 'UNDO_DELETE': {
      if (!state.deletedMachine) return state;
      return {
        ...state,
        machines: [...state.machines, state.deletedMachine],
        deletedMachine: null,
      };
    }
    case 'SET_SHOW_FORM':
      return { ...state, showForm: action.payload };
    case 'SET_EDITING_MACHINE':
      return { ...state, editingMachine: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'SET_STATUS_FILTER':
      return { ...state, statusFilter: action.payload };
    default:
      return state;
  }
};