import type { Machine } from '../../types/machine';
import { LABELS } from '../../constants/labels';

interface UndoNotificationProps {
  deletedMachine: Machine;
  onUndo: () => void;
}

export const UndoNotification = ({ deletedMachine, onUndo }: UndoNotificationProps) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex justify-between items-center">
      <span className="text-yellow-800">
        {LABELS.MACHINE_DELETED.replace('{name}', deletedMachine.name)}
      </span>
      <button 
        onClick={onUndo}
        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
      >
        {LABELS.UNDO_DELETE}
      </button>
    </div>
  );
};