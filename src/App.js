import Header from './Components/Header'
import Footer from './Components/Footer'
import NotesList from './Components/NotesList'

function App() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 mt-4">
    <NotesList/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
