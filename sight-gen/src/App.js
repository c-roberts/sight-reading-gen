import './App.css';
import AppLayout from './components/layout';
import SheetMusicContainer from './components/sheetmusic-container';

//..\public\_tester.musicxml

function App() {
  return (
      <AppLayout>
        <div><SheetMusicContainer renderID='tester'/></div>
      </AppLayout>

  );
}

export default App;
