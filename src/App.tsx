import { AppProvider } from './context/AppContext';
import { MachinesDashboard } from './pages/MachinesDashboard';

function App() {
  return (
    <AppProvider>
      <MachinesDashboard />
    </AppProvider>
  );
}

export default App;