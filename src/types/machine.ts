export const MachineStatusEnum = {
  Running: 'Running',
  Idle: 'Idle',
  Offline: 'Offline',
} as const;

export type MachineStatusEnum = typeof MachineStatusEnum[keyof typeof MachineStatusEnum];

export interface Machine {
  id: string;
  name: string;
  status: MachineStatusEnum;
  updatedAt: Date;
}
// Array of all possible MachineStatusEnum values
export const MACHINE_STATUS_VALUES = Object.values(MachineStatusEnum) as MachineStatusEnum[];

// Type alias for backward compatibility
export type MachineStatus = MachineStatusEnum;