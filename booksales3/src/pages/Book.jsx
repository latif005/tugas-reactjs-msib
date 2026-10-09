function Book({ books, setBooks }) {
  function tambahBuku() {
    const bukuBaru = {
        id: Date.now(),
        title: "Buku Baru",
        author: "Penulis Baru",
        year: 2025,
        description: "Ini adalah buku yang ditambahkan melalui tombol.",
        image: "https://placehold.co/300x400?text=Buku+Baru"
    };
    
    setBooks([...books, bukuBaru]);

  }
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Koleksi Buku</h2>
        <p className="text-secondary">
          Temukan buku yang sesuai dengan minat dan kebutuhanmu.
        </p>
      </div>

      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={tambahBuku}>
            + Tambah Buku
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={`Sampul ${book.title}`}
              />

              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="text-secondary">{book.author}</p>
                <p>{book.description}</p>
                <small className="text-secondary">
                  Tahun terbit: {book.year}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Book
