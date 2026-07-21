import Header from "../../islands/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { getPosts } from "../../utils/posts.ts";
import RecepcionistaSiqueira from "../../islands/RecepcionistaSiqueira.tsx";

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <>
      <Header />
      <div class="div-cotainer">
        <article>
          <section id="blog-home" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "60vh" }}>
            <div class="blog-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px", borderRadius: "0" }}>
              <h1 class="home-title" style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}>Blog</h1>
              <div class="posts-list" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {posts.map((post) => (
                  <div key={post.slug} class="post-card" style={{ 
                    borderRadius: "0", 
                    padding: "20px"
                  }}>
                    {post.image && (
                      <img src={post.image} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "0", marginBottom: "15px" }} />
                    )}
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "var(--principal, #ff0055)" }}>{post.title}</h2>
                    <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "15px" }}>{new Date(post.date).toLocaleDateString('pt-BR')}</p>
                    <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`}>
                      <button type="button" class="neon-red-glow" style={{ padding: "10px 20px", fontSize: "1rem" }}>
                        Ler mais
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
        <Footer />
      </div>
      <RecepcionistaSiqueira />
    </>
  );
}
