import type { Machine } from '../../types/machine';
import { LABELS } from '../../constants/labels';
import { STATUS_STYLES, getStatusLabel } from '../../utils/machineStatus';

interface MachineCardProps {
  machine: Machine;
  onEdit: (machine: Machine) => void;
  onDelete: (id: string) => void;
}

export const MachineCard = ({ machine, onEdit, onDelete }: MachineCardProps) => {
  const styles = STATUS_STYLES[machine.status];
  const statusLabel = getStatusLabel(machine.status);

  return (
    <div className={`bg-white border-l-4 ${styles.card} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {machine.name}
        </h3>
        
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles.badge}`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${styles.dot} animate-pulse`} />
          {statusLabel}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {LABELS.LAST_UPDATED.replace('{date}', machine.updatedAt.toLocaleDateString('he-IL'))}
        </div>
      </div>
      
      <div className="flex gap-3">
        <button 
          onClick={() => onEdit(machine)}
          className="flex-1 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
          aria-label={`ערוך ${machine.name}`}
        >
          {LABELS.EDIT}
        </button>
        
        <button 
          onClick={() => onDelete(machine.id)}
          className="flex-1 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors"
          aria-label={`מחק ${machine.name}`}
        >
          {LABELS.DELETE}
        </button>
      </div>
    </div>
  );
};