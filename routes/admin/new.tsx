import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AdminEditor from "../../islands/AdminEditor.tsx";
import Header from "../../islands/Header.tsx";

export default function NewPostPage() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css" />
        <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
        <title>Novo Post - Admin Siqueira</title>
      </Head>
      <Header />
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-color)", color: "var(--text-color)", paddingTop: "100px", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px" }}>
        
        <div class="max-w-4xl mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "2rem" }}>Escrever Nova Postagem</h1>
            <a href="/admin" style={{ color: "var(--principal)", textDecoration: "none" }}>&larr; Voltar ao Dashboard</a>
          </div>

          <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}>
            <form method="POST" action="/api/posts" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Título do Post *</label>
                <input type="text" name="title" required style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)" }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Resumo (Excerpt) *</label>
                <textarea name="excerpt" rows={3} required style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)" }}></textarea>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>URL da Imagem de Capa (Google Drive ou Web) *</label>
                <input type="url" name="image" placeholder="https://..." required style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)" }} />
                <small style={{ display: "block", marginTop: "5px", opacity: 0.7 }}>Cole aqui o link público da imagem salva no seu Google Drive (5TB) para economizar espaço no servidor!</small>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Conteúdo (Markdown) *</label>
                <div style={{ backgroundColor: "#ffffff", color: "#000000", borderRadius: "4px" }}>
                  <AdminEditor />
                </div>
              </div>

              <button type="submit" class="neon-red-glow" style={{ padding: "15px", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "1.1rem", marginTop: "10px" }}>
                PUBLICAR POST
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
