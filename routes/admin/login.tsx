import { PageProps, Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const password = form.get("password")?.toString();
    const correctPassword = Deno.env.get("ADMIN_PASSWORD") || "minhasenha123";

    if (password === correctPassword) {
      const headers = new Headers();
      setCookie(headers, {
        name: "admin_auth",
        value: password,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });
      headers.set("location", "/admin");
      return new Response(null, {
        status: 303,
        headers,
      });
    }

    return ctx.render({ error: "Senha incorreta!" });
  }
};

export default function LoginPage({ data }: PageProps) {
  return (
    <>
      <Head>
        <title>Login - Admin Siqueira</title>
      </Head>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "var(--bg-secondary)", color: "var(--text-color)" }}>
        <div style={{ background: "var(--bg-color)", padding: "40px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h1 style={{ marginBottom: "20px" }}>Acesso Restrito</h1>
          {data?.error && <p style={{ color: "var(--danger)", marginBottom: "15px" }}>{data.error}</p>}
          <form method="POST" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="password" name="password" placeholder="Senha do Admin" style={{ padding: "10px", borderRadius: "4px", border: "1px solid var(--border-color)", background: "var(--bg-secondary)", color: "var(--text-color)" }} required />
            <button type="submit" class="neon-red-glow" style={{ padding: "10px", border: "none", cursor: "pointer", fontWeight: "bold" }}>ENTRAR</button>
          </form>
        </div>
      </div>
    </>
  );
}
