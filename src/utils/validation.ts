
import type { Machine } from '../types/machine';
import { MachineStatusEnum } from '../types/machine';
import { LABELS } from '../constants/labels';

export const validateMachine = (machine: Partial<Machine>): string[] => {
  const errors: string[] = [];
  
  if (!machine.name?.trim()) {
    errors.push(LABELS.NAME_REQUIRED);
  } else if (machine.name.trim().length < 2) {
    errors.push(LABELS.NAME_MIN_LENGTH);
  }
  
  if (!machine.status || !Object.values(MachineStatusEnum).includes(machine.status)) {
    errors.push(LABELS.STATUS_REQUIRED);
  }
  
  return errors;
};