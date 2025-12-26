import { MachineStatusEnum } from '../types/machine';
import { LABELS } from '../constants/labels';

export const MACHINE_STATUS_OPTIONS: { value: MachineStatusEnum; label: string }[] = [
  { value: MachineStatusEnum.Running, label: LABELS.STATUS_RUNNING },
  { value: MachineStatusEnum.Idle, label: LABELS.STATUS_IDLE },
  { value: MachineStatusEnum.Offline, label: LABELS.STATUS_OFFLINE },
];

export const getStatusLabel = (status: MachineStatusEnum): string => {
  const option = MACHINE_STATUS_OPTIONS.find(opt => opt.value === status);
  return option?.label || status;
};

export const STATUS_STYLES: Record<MachineStatusEnum, { card: string; badge: string; dot: string }> = {
  [MachineStatusEnum.Running]: { card: 'border-green-500 bg-green-50', badge: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
  [MachineStatusEnum.Idle]: { card: 'border-yellow-500 bg-yellow-50', badge: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500' },
  [MachineStatusEnum.Offline]: { card: 'border-red-500 bg-red-50', badge: 'bg-red-100 text-red-800', dot: 'bg-red-500' }
};