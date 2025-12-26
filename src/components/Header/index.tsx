import { LABELS } from '../../constants/labels';

interface HeaderProps {
  onAddMachine: () => void;
}

export const Header = ({ onAddMachine }: HeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {import.meta.env.VITE_APP_TITLE || LABELS.APP_TITLE}
      </h1>

      <button
        aria-label="Add a new machine"
        onClick={onAddMachine}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
      >
        {LABELS.ADD_MACHINE}
      </button>
    </div>
  );
};