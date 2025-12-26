import type { Machine } from '../types/machine';

const STORAGE_KEY = 'machines';

export const saveMachines = (machines: Machine[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(machines));
  } catch (error) {
    console.error('Error saving machines:', error);
  }
};

export const loadMachines = (): Machine[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const parsed: Machine[] = JSON.parse(stored);
    return parsed.map((m: Machine) => ({
      ...m,
      updatedAt: new Date(m.updatedAt)
    }));
  } catch (error) {
    console.error('Error loading machines:', error);
    return [];
  }
};