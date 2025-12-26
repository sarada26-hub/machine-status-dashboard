import { MachineStatusEnum } from '../../types/machine';
import type { MachineStatus } from '../../types/machine';
import { LABELS } from '../../constants/labels';

interface FilterSearchProps {
  searchTerm: string;
  statusFilter: MachineStatus | 'all';
  onSearchChange: (term: string) => void;
  onStatusChange: (status: MachineStatus | 'all') => void;
}

export const FilterSearch = ({ 
  searchTerm, 
  statusFilter, 
  onSearchChange, 
  onStatusChange 
}: FilterSearchProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder={LABELS.SEARCH_PLACEHOLDER}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="sm:w-48">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value as MachineStatus | 'all')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">{LABELS.ALL_STATUSES}</option>
            <option value={MachineStatusEnum.Running}>{LABELS.STATUS_RUNNING}</option>
            <option value={MachineStatusEnum.Idle}>{LABELS.STATUS_IDLE}</option>
            <option value={MachineStatusEnum.Offline}>{LABELS.STATUS_OFFLINE}</option>
          </select>
        </div>
      </div>
    </div>
  );
};