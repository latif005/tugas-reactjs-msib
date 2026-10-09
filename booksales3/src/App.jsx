import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import initialBooks from './Utils/books'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Book from './pages/Book'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  const [books, setBooks] = useState(initialBooks)
  
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route 
            path='/' 
            element={<Home books={books} />} 
          />
          <Route 
            path='/books' 
            element={<Book books={books} setBooks={setBooks} />} 
          />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App