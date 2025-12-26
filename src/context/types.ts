import type { Machine, MachineStatus } from '../types/machine';

export type AppState = {
  machines: Machine[];
  deletedMachine: Machine | null;
  showForm: boolean;
  editingMachine?: Machine;
  searchTerm: string;
  statusFilter: MachineStatus | 'all';
};

export type AppAction =
  | { type: 'ADD_MACHINE'; payload: Omit<Machine, 'id'> }
  | { type: 'UPDATE_MACHINE'; payload: { id: string; updates: Partial<Machine> } }
  | { type: 'DELETE_MACHINE'; payload: string }
  | { type: 'UNDO_DELETE' }
  | { type: 'SET_SHOW_FORM'; payload: boolean }
  | { type: 'SET_EDITING_MACHINE'; payload?: Machine }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_STATUS_FILTER'; payload: MachineStatus | 'all' };