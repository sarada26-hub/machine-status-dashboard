import { createContext, useReducer, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { appReducer, initialState } from './reducer';
import type { AppState, AppAction } from './types';
import type { Machine } from '../types/machine';

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const loadMachines = (): Machine[] => {
  const stored = localStorage.getItem('machines');
  if (!stored) return initialState.machines;
  
  try {
    const parsed: Machine[] = JSON.parse(stored);
    return parsed.map((m: Machine) => ({
      ...m,
      updatedAt: new Date(m.updatedAt)
    }));
  } catch {
    return initialState.machines;
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, (init) => ({
    ...init,
    machines: loadMachines()
  }));

  useEffect(() => {
    localStorage.setItem('machines', JSON.stringify(state.machines));
  }, [state.machines]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};