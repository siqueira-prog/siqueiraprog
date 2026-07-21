import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  // Bloqueando o painel de admin por enquanto pois o Deno Deploy não permite escrita
  return new Response("Painel Admin desativado temporariamente.", { status: 403 });

  /*
  const url = new URL(req.url);
  
  if (url.pathname === "/admin/login") {
    return await ctx.next();
  }

  const cookies = getCookies(req.headers);
  const correctPassword = Deno.env.get("ADMIN_PASSWORD") || "minhasenha123";

  if (cookies.admin_auth !== correctPassword) {
    return new Response(null, {
      status: 303,
      headers: { location: "/admin/login" },
    });
  }

  return await ctx.next();
  */
}
