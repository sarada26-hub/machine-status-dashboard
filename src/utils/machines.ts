import type { Machine } from '../types/machine';
import { type MachineStatus } from '../types/machine';

export const filterMachines = (
  machines: Machine[], 
  searchTerm: string, 
  statusFilter: MachineStatus | 'all'
): Machine[] => {
  return machines.filter(machine => {
    const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || machine.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
};