import { AppProvider } from './context/AppContext';
import { MachinesDashboard } from './components/MachinesDashboard';

function App() {
  return (
    <AppProvider>
      <MachinesDashboard />
    </AppProvider>
  );
}

export default App;