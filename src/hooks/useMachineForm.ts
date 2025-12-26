import { useState } from 'react';
import type { Machine } from '../types/machine';
import { MachineStatusEnum, type MachineStatus } from '../types/machine';
import { validateMachine } from '../utils/validation';

export const useMachineForm = (initialMachine?: Machine) => {
  const [name, setName] = useState(initialMachine?.name || '');
  const [status, setStatus] = useState<MachineStatus>(initialMachine?.status || MachineStatusEnum.Running);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (onSubmit: (data: Omit<Machine, 'id'>) => void) => {
    const machineData = { name: name.trim(), status, updatedAt: new Date() };
    const validationErrors = validateMachine(machineData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }
    
    onSubmit(machineData);
    setErrors([]);
    reset();
    return true;
  };

  const reset = () => {
    setName('');
    setStatus(MachineStatusEnum.Running);
    setErrors([]);
  };

  return {
    name,
    status,
    errors,
    setName,
    setStatus,
    handleSubmit,
    reset
  };
};