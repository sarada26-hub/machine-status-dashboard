import type { Machine } from '../types/machine';
import { MachineStatusEnum } from '../types/machine';

export const seedMachines: Machine[] = [
  {
    id: '1',
    name: 'Production Line A',
    status: MachineStatusEnum.Running,
    updatedAt: new Date('2024-01-15T10:30:00')
  },
  {
    id: '2',
    name: 'Assembly Robot B',
    status: MachineStatusEnum.Idle,
    updatedAt: new Date('2025-01-14T14:20:00')
  },
  {
    id: '3',
    name: 'Packaging Unit C',
    status: MachineStatusEnum.Offline,
    updatedAt: new Date('2024-02-13T09:15:00')
  },
  {
    id: '4',
    name: 'Quality Control D',
    status: MachineStatusEnum.Running,
    updatedAt: new Date('2024-03-16T11:45:00')
  },
  {
    id: '5',
    name: 'Conveyor Belt E',
    status: MachineStatusEnum.Running,
    updatedAt: new Date('2024-04-16T08:30:00')
  },
  {
    id: '6',
    name: 'Welding Station F',
    status: MachineStatusEnum.Idle,
    updatedAt: new Date('2024-01-15T16:00:00')
  },
  {
    id: '7',
    name: 'Paint Booth G',
    status: MachineStatusEnum.Offline,
    updatedAt: new Date('2023-01-12T13:20:00')
  },
  {
    id: '8',
    name: 'CNC Machine H',
    status: MachineStatusEnum.Running,
    updatedAt: new Date('2024-05-16T12:10:00')
  }
];