import { useAppContext } from '../../context/AppContext';
import { filterMachines } from '../../utils/machines';
import { Header } from '../Header';
import { UndoNotification } from '../UndoNotification';
import { MachineList } from '../MachineList/index';
import { MachineForm } from '../MachineForm';
import { FilterSearch } from '../FilterSearch';

export const MachinesDashboard = () => {
  const { state, dispatch } = useAppContext();

  const filteredMachines = filterMachines(state.machines, state.searchTerm, state.statusFilter);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header onAddMachine={() => dispatch({ type: 'SET_SHOW_FORM', payload: true })} />

        {state.deletedMachine && (
          <UndoNotification
            deletedMachine={state.deletedMachine}
            onUndo={() => dispatch({ type: 'UNDO_DELETE' })}
          />
        )}

        {state.showForm && (
          <div className="mb-6">
            <MachineForm
              machine={state.editingMachine}
              onSubmit={(data) => {
                if (state.editingMachine) {
                  dispatch({ type: 'UPDATE_MACHINE', payload: { id: state.editingMachine.id, updates: data } });
                } else {
                  dispatch({ type: 'ADD_MACHINE', payload: data });
                }
                dispatch({ type: 'SET_SHOW_FORM', payload: false });
                dispatch({ type: 'SET_EDITING_MACHINE', payload: undefined });
              }}
              onCancel={() => {
                dispatch({ type: 'SET_SHOW_FORM', payload: false });
                dispatch({ type: 'SET_EDITING_MACHINE', payload: undefined });
              }}
            />
          </div>
        )}

        <FilterSearch
          searchTerm={state.searchTerm}
          statusFilter={state.statusFilter}
          onSearchChange={(term) => dispatch({ type: 'SET_SEARCH', payload: term })}
          onStatusChange={(filter) => dispatch({ type: 'SET_STATUS_FILTER', payload: filter })}
        />

        <MachineList
          machines={filteredMachines}
          onEdit={(machine) => {
            dispatch({ type: 'SET_EDITING_MACHINE', payload: machine });
            dispatch({ type: 'SET_SHOW_FORM', payload: true });
          }}
          onDelete={(id) => dispatch({ type: 'DELETE_MACHINE', payload: id })}
        />
      </div>
    </div>
  );
};