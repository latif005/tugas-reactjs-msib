import { useEffect, useState } from 'react'

const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 'Rp89.000',
    image: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    description: 'Panduan praktis untuk membangun kebiasaan baik melalui perubahan kecil.'
  },
  {
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    price: 'Rp78.000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDMJJCVxW7s8j9QIfMpYGH8e3fuellW9HknzUbNBXog&s=10',
    description: 'Pengantar stoisisme untuk menghadapi masalah dan tekanan sehari-hari.'
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 'Rp95.000',
    image: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg',
    description: 'Pelajaran tentang cara berpikir dan mengambil keputusan mengenai uang.'
  },
  {
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    price: 'Rp85.000',
    image: 'https://covers.openlibrary.org/b/isbn/9789793062792-L.jpg',
    description: 'Kisah perjuangan dan persahabatan anak-anak Belitung dalam mengejar pendidikan.'
  },
  {
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    price: 'Rp92.000',
    image: 'https://covers.openlibrary.org/b/isbn/9789799731234-L.jpg',
    description: 'Novel tentang kehidupan, pendidikan, dan ketidakadilan pada masa kolonial.'
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 'Rp110.000',
    image: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    description: 'Perjalanan panjang manusia dari masa awal hingga dunia modern.'
  }
]

function Navbar({ currentPage }) {
  return (
    <header className="border-bottom bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <a href="#home" className="navbar-brand d-flex align-items-center fw-bold fs-4">
            <i className="fa-solid fa-book-open me-2 text-primary"></i>
            Bookstore
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'home' ? 'active fw-semibold' : ''}`} href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'team' ? 'active fw-semibold' : ''}`} href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'contact' ? 'active fw-semibold' : ''}`} href="#contact">Contact</a>
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary">Hubungi Kami</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="container my-5">
      <div className="hero-box row align-items-center rounded-4 p-4 p-lg-5 shadow-sm">
        <div className="col-lg-7 py-3">
          <span className="badge text-bg-primary mb-3">Buku Pilihan Minggu Ini</span>
          <h1 className="display-5 fw-bold lh-1 mb-3">Baca lebih banyak, temukan lebih banyak.</h1>
          <p className="lead text-secondary mb-4">
            Bookstore menyediakan berbagai buku pilihan untuk menemani belajar, bekerja,
            dan mengisi waktu luang dengan bacaan yang bermanfaat.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a href="#books" className="btn btn-primary btn-lg px-4">Lihat Buku</a>
            <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">Hubungi Kami</a>
          </div>
        </div>
        <div className="col-lg-5 text-center mt-4 mt-lg-0">
          <img
            src={books[0].image}
            alt="Sampul buku Atomic Habits"
            className="hero-book rounded-3 shadow"
          />
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />

      <section id="books" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Best Seller</h2>
            <p className="text-secondary mb-0">
              Beberapa buku yang banyak dicari dan cocok untuk menambah koleksi bacaan kamu.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.title}>
                <div className="card h-100 border-0 shadow-sm book-card">
                  <img src={book.image} className="card-img-top book-cover" alt={`Sampul ${book.title}`} />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold">{book.title}</h5>
                    <p className="small text-secondary mb-2">{book.author}</p>
                    <p className="card-text text-secondary flex-grow-1">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">{book.price}</span>
                      <button className="btn btn-sm btn-outline-primary">Detail</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <i className="fa-solid fa-book fa-2x text-primary mb-3"></i>
            <h5 className="fw-bold">Buku Pilihan</h5>
            <p className="text-secondary">Koleksi bacaan yang dipilih untuk berbagai kebutuhan.</p>
          </div>
          <div className="col-md-4">
            <i className="fa-solid fa-tags fa-2x text-primary mb-3"></i>
            <h5 className="fw-bold">Harga Bersahabat</h5>
            <p className="text-secondary">Harga terjangkau untuk pelajar dan pembaca umum.</p>
          </div>
          <div className="col-md-4">
            <i className="fa-solid fa-headset fa-2x text-primary mb-3"></i>
            <h5 className="fw-bold">Layanan Ramah</h5>
            <p className="text-secondary">Siap membantu kamu menemukan buku yang sesuai.</p>
          </div>
        </div>
      </section>
    </>
  )
}

function Team() {
  return (
    <main>
      <section className="page-heading py-5">
        <div className="container text-center">
          <span className="badge text-bg-primary mb-2">Tentang Pengelola</span>
          <h1 className="fw-bold">Our Team</h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: '650px' }}>
            Bookstore merupakan tugas individu. Halaman ini berisi informasi mengenai
            pengelola website yang mengembangkan dan mengelola tugas Bookstore.
          </p>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card border-0 shadow-sm text-center h-100">
              <div className="card-body p-5">
                <div className="team-avatar mx-auto mb-4">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h3 className="fw-bold mb-1">Latif Wibowo</h3>
                <p className="text-primary fw-semibold">Web Developer</p>
                <p className="text-secondary">
                  Bertanggung jawab mengembangkan tampilan Bookstore menggunakan React JS,
                  menyusun halaman website, dan memastikan setiap bagian dapat digunakan dengan baik.
                </p>
                <div className="d-flex justify-content-center gap-2 mt-4">
                  <span className="badge text-bg-light border">React JS</span>
                  <span className="badge text-bg-light border">Bootstrap</span>
                  <span className="badge text-bg-light border">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <section className="page-heading py-5">
        <div className="container text-center">
          <span className="badge text-bg-primary mb-2">Butuh Bantuan?</span>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-secondary">Silakan hubungi Bookstore untuk pertanyaan atau informasi buku.</p>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <h4 className="fw-bold mb-4">Informasi Kontak</h4>
                <div className="d-flex gap-3 mb-4">
                  <i className="fa-solid fa-location-dot text-primary mt-1"></i>
                  <div><strong>Alamat</strong><p className="text-secondary mb-0">Bekasi, Jawa Barat</p></div>
                </div>
                <div className="d-flex gap-3 mb-4">
                  <i className="fa-solid fa-envelope text-primary mt-1"></i>
                  <div><strong>Email</strong><p className="text-secondary mb-0">bookstore@example.com</p></div>
                </div>
                <div className="d-flex gap-3">
                  <i className="fa-solid fa-phone text-primary mt-1"></i>
                  <div><strong>Telepon</strong><p className="text-secondary mb-0">0812-3456-7890</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <h4 className="fw-bold mb-4">Kirim Pesan</h4>
                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nama" className="form-label">Nama</label>
                      <input id="nama" type="text" className="form-control" placeholder="Masukkan nama" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input id="email" type="email" className="form-control" placeholder="nama@email.com" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subjek" className="form-label">Subjek</label>
                      <input id="subjek" type="text" className="form-control" placeholder="Topik pesan" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="pesan" className="form-label">Pesan</label>
                      <textarea id="pesan" className="form-control" rows="5" placeholder="Tulis pesan kamu..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary px-4">Kirim Pesan</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="border-top bg-white mt-auto">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 text-secondary">© 2026 Bookstore React JS Project</p>
        <div className="d-flex gap-3">
          <a href="#home" className="text-secondary text-decoration-none">Home</a>
          <a href="#team" className="text-secondary text-decoration-none">Team</a>
          <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'team' || hash === 'contact') return hash
  return 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="app-shell">
      <Navbar currentPage={page} />
      {page === 'home' && <Home />}
      {page === 'team' && <Team />}
      {page === 'contact' && <Contact />}
      <Footer />
    </div>
  )
}

export default App
