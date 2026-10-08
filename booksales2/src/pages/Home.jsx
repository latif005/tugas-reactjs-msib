import { Link } from 'react-router-dom'

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

function Hero() {
  return (
    <section className="container my-5">
      <div className="hero-box row align-items-center rounded-4 p-4 p-lg-5 shadow-sm">
        <div className="col-lg-7 py-3">
          <span className="badge text-bg-primary mb-3">
            Buku Pilihan Minggu Ini
          </span>

          <h1 className="display-5 fw-bold lh-1 mb-3">
            Baca lebih banyak, temukan lebih banyak.
          </h1>

          <p className="lead text-secondary mb-4">
            Bookstore menyediakan berbagai buku pilihan untuk menemani belajar,
            bekerja, dan mengisi waktu luang dengan bacaan yang bermanfaat.
          </p>

          <div className="d-flex flex-wrap gap-2">
            <a href="#books" className="btn btn-primary btn-lg px-4">
              Lihat Buku
            </a>

            <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4">
              Hubungi Kami
            </Link>
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
              Beberapa buku yang banyak dicari dan cocok untuk menambah koleksi
              bacaan kamu.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.title}>
                <div className="card h-100 border-0 shadow-sm book-card">
                  <img
                    src={book.image}
                    className="card-img-top book-cover"
                    alt={`Sampul ${book.title}`}
                  />

                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold">
                      {book.title}
                    </h5>

                    <p className="small text-secondary mb-2">
                      {book.author}
                    </p>

                    <p className="card-text text-secondary flex-grow-1">
                      {book.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">
                        {book.price}
                      </span>

                      <button className="btn btn-sm btn-outline-primary">
                        Detail
                      </button>
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

            <h5 className="fw-bold">
              Buku Pilihan
            </h5>

            <p className="text-secondary">
              Koleksi bacaan yang dipilih untuk berbagai kebutuhan.
            </p>
          </div>

          <div className="col-md-4">
            <i className="fa-solid fa-tags fa-2x text-primary mb-3"></i>

            <h5 className="fw-bold">
              Harga Bersahabat
            </h5>

            <p className="text-secondary">
              Harga terjangkau untuk pelajar dan pembaca umum.
            </p>
          </div>

          <div className="col-md-4">
            <i className="fa-solid fa-headset fa-2x text-primary mb-3"></i>

            <h5 className="fw-bold">
              Layanan Ramah
            </h5>

            <p className="text-secondary">
              Siap membantu kamu menemukan buku yang sesuai.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home