import { Route, Routes } from 'react-router-dom'
import About from '../About/About';
import Header from '../Header/Header';
import './App.scss';

export default function App () {

  return (
    <div className="App">
      <Header />
      <main className='container pt-4'>
        <Routes>
          <Route path="/" element={<h2>MAIN</h2>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
