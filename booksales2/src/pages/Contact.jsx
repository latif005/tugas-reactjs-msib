function Contact() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact</h1>
        <p className="text-secondary">
          Punya pertanyaan atau ingin mengetahui lebih lanjut tentang Bookstore?
        </p>
      </div>

      <div className="row g-4">

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">
                Hubungi Kami
              </h4>

              <div className="d-flex mb-4">
                <i className="fa-solid fa-envelope text-primary fa-lg me-3 mt-1"></i>

                <div>
                  <h6 className="fw-bold mb-1">
                    Email
                  </h6>

                  <p className="text-secondary mb-0">
                    bookstore@example.com
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <i className="fa-solid fa-phone text-primary fa-lg me-3 mt-1"></i>

                <div>
                  <h6 className="fw-bold mb-1">
                    Telepon
                  </h6>

                  <p className="text-secondary mb-0">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <i className="fa-solid fa-location-dot text-primary fa-lg me-3 mt-1"></i>

                <div>
                  <h6 className="fw-bold mb-1">
                    Lokasi
                  </h6>

                  <p className="text-secondary mb-0">
                    Bekasi, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">
                Kirim Pesan
              </h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Nama
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama kamu"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukkan email kamu"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Pesan
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tulis pesan kamu..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-4"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact