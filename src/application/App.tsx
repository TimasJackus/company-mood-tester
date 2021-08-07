import { SWRConfig } from 'swr';
import { swrConfig } from '../infrastructure/api';
import Router from './Router';

function App() {
  return (
    <div id="root">
      <SWRConfig value={swrConfig}><Router /></SWRConfig>
    </div>
  );
}

export default App;
