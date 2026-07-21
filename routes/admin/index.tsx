import { PageProps, Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";
import { getPosts, BlogPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const posts = getPosts();
    return ctx.render({ posts });
  }
};

export default function AdminDashboard({ data }: PageProps) {
  const posts = data.posts as BlogPost[];

  return (
    <>
      <Head>
        <title>Dashboard - Admin Siqueira</title>
      </Head>
      <Header />
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-color)", color: "var(--text-color)", paddingTop: "100px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px" }}>
        
        <div class="max-w-6xl mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "2rem" }}>Dashboard</h1>
            <a href="/admin/new" class="neon-red-glow" style={{ padding: "10px 20px", textDecoration: "none", fontWeight: "bold" }}>
              + NOVO POST
            </a>
          </div>
          
          <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>Seus posts publicados</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {posts.map(post => (
                <div key={post.slug} style={{ padding: "15px", border: "1px solid var(--border-color)", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ fontSize: "1.1rem" }}>{post.title}</strong>
                    <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "5px" }}>{new Date(post.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <a href={`/blog/${post.slug}`} target="_blank" style={{ color: "var(--principal)", textDecoration: "none", fontSize: "0.9rem" }}>Ver no Site</a>
                  </div>
                </div>
              ))}
              {posts.length === 0 && <p style={{ opacity: 0.5 }}>Nenhum post encontrado.</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
