import { Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { slugify } from "../../utils/posts.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    // Bloqueando a criação de posts por enquanto pois o Deno Deploy não permite escrita
    return new Response("Criação de posts desativada temporariamente.", { status: 403 });

    /*
    // 1. Verify Authentication
    const cookies = getCookies(req.headers);
    if (cookies.admin_auth !== Deno.env.get("ADMIN_PASSWORD")) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 2. Parse form data
    const form = await req.formData();
    const title = form.get("title")?.toString() || "";
    const excerpt = form.get("excerpt")?.toString() || "";
    const image = form.get("image")?.toString() || "";
    const content = form.get("content")?.toString() || "";

    if (!title || !content) {
      return new Response("Title and Content are required", { status: 400 });
    }

    // 3. Create Slug & Date
    const slug = slugify(title);
    const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // 4. Construct Markdown with Frontmatter
    const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
image: "${image}"
---

${content}
`;

    // 5. Save to disk (static/posts/slug.md)
    const filePath = `./static/posts/${slug}.md`;
    await Deno.writeTextFile(filePath, markdown);

    // 6. Redirect back to dashboard
    return new Response(null, {
      status: 303,
      headers: { location: "/admin" },
    });
    */
  }
};
