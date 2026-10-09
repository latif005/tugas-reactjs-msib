function Team() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Team</h1>
        <p className="text-secondary">
          Mengenal pengembang website Bookstore.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: '100px',
                  height: '100px',
                  fontSize: '36px'
                }}
              >
                LW
              </div>

              <h4 className="fw-bold">
                Latif Wibowo
              </h4>

              <p className="text-primary fw-semibold">
                Web Developer
              </p>

              <p className="text-secondary">
                Mahasiswa yang mengembangkan website Bookstore menggunakan
                React JS, Bootstrap, dan React Router.
              </p>

              <div className="d-flex justify-content-center gap-2 flex-wrap">
                <span className="badge text-bg-light border">
                  React JS
                </span>

                <span className="badge text-bg-light border">
                  Bootstrap
                </span>

                <span className="badge text-bg-light border">
                  React Router
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team