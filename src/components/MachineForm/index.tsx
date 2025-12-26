import { useState } from 'react';
import type { Machine } from '../../types/machine';
import { MachineStatusEnum, type MachineStatus } from '../../types/machine';
import { validateMachine } from '../../utils/validation';
import { LABELS } from '../../constants/labels';

interface MachineFormProps {
  machine?: Machine;
  onSubmit: (machine: Omit<Machine, 'id'>) => void;
  onCancel: () => void;
}

export const MachineForm = ({ machine, onSubmit, onCancel }: MachineFormProps) => {
  const [name, setName] = useState(machine?.name || '');
  const [status, setStatus] = useState<MachineStatus>(machine?.status || MachineStatusEnum.Running);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const machineData = { name: name.trim(), status, updatedAt: new Date() };
    const validationErrors = validateMachine(machineData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    onSubmit(machineData);
    setErrors([]);
    setName('');
    setStatus(MachineStatusEnum.Running);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {machine ? LABELS.EDIT_MACHINE_TITLE : LABELS.ADD_MACHINE_TITLE}
      </h3>
      
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
          {errors.map((error, index) => (
            <div key={index} className="text-red-700 text-sm">• {error}</div>
          ))}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {LABELS.MACHINE_NAME} {LABELS.REQUIRED_FIELD}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={LABELS.MACHINE_NAME_PLACEHOLDER}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {LABELS.STATUS} {LABELS.REQUIRED_FIELD}
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as MachineStatus)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={MachineStatusEnum.Running}>{LABELS.STATUS_RUNNING}</option>
          <option value={MachineStatusEnum.Idle}>{LABELS.STATUS_IDLE}</option>
          <option value={MachineStatusEnum.Offline}>{LABELS.STATUS_OFFLINE}</option>
        </select>
      </div>
      
      <div className="flex gap-3">
        <button 
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
        >
          {machine ? LABELS.UPDATE : LABELS.SAVE}
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
        >
          {LABELS.CANCEL}
        </button>
      </div>
    </form>
  );
};