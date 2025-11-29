
import './App.css'

function App() {

  return (
      <section className="blog-card">
        <section className="blog-card_image">
            <picture>
                <source
                    type="image/avif"
                    srcSet={`${import.meta.env.BASE_URL}img/spacejoy-YqFz7UMm8qE-unsplash.avif`}
                />
                <source
                    type="image/webp"
                    srcSet={`${import.meta.env.BASE_URL}img/spacejoy-YqFz7UMm8qE-unsplash.webp`}
                />
                <img
                    decoding="async"
                    fetchpriority="high"
                    width="640"
                    height="640"
                    src={`${import.meta.env.BASE_URL}img/spacejoy-YqFz7UMm8qE-unsplash.jpg`}
                    alt="Interior image of a living room"
                />
            </picture>
        </section>
          <section className="blog-card_content">
              <span className="blog-card_bade green-badge">Interior</span>
              <h3>Top 5 Living Room Inspirations</h3>
              <p className="blog-card_content-text">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
              <section className="blog-card_action">
                  <button>Read more</button>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4763 9.16658L9.00625 4.69657L10.1848 3.51807L16.6666 9.99992L10.1848 16.4817L9.00625 15.3032L13.4763 10.8332H3.33325V9.16658H13.4763Z"
                          />
                  </svg>
              </section>
          </section>
      </section>
  )
}

export default App
