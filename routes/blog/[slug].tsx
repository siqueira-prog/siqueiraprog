import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { getPost } from "../../utils/posts.ts";
import RecepcionistaSiqueira from "../../islands/RecepcionistaSiqueira.tsx";
import { CSS, render } from "jsr:@deno/gfm";

export default function BlogPostPage(props: PageProps) {
  const { slug } = props.params;
  const post = getPost(slug);

  if (!post) {
    return (
      <>
        <Header />
        <div class="div-cotainer">
          <article>
            <section style={{ paddingTop: "150px", textAlign: "center", minHeight: "50vh" }}>
              <h1>Post não encontrado</h1>
              <a href="/blog" class="neon-red-glow" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px" }}>
                Voltar para o Blog
              </a>
            </section>
          </article>
          <Footer />
        </div>
      </>
    );
  }

  // Use GFM to parse markdown
  const html = render(post.content);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Header />
      <div class="div-cotainer">
        <article>
          <section id="blog-post" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "60vh" }}>
            <div class="blog-container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px", borderRadius: "0" }}>
              <a href="/blog" style={{ color: "inherit", opacity: 0.7, textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
                &larr; Voltar para o Blog
              </a>
              {post.image && (
                <img src={post.image} alt={post.title} style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "0", marginBottom: "30px" }} />
              )}
              <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "var(--principal, #ff0055)" }}>{post.title}</h1>
              <p style={{ opacity: 0.7, marginBottom: "40px" }}>Publicado em: {new Date(post.date).toLocaleDateString('pt-BR')}</p>
              
              <div 
                class="post-content markdown-body" 
                data-color-mode="auto" 
                data-light-theme="light" 
                data-dark-theme="dark"
                dangerouslySetInnerHTML={{ __html: html }} 
              />
            </div>
          </section>
        </article>
        <Footer />
      </div>
      <RecepcionistaSiqueira />
    </>
  );
}
