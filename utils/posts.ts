import { extract } from "$std/front_matter/any.ts";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  try {
    for (const dirEntry of Deno.readDirSync("./static/posts")) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        const fileContent = Deno.readTextFileSync("./static/posts/" + dirEntry.name);
        const { attrs, body } = extract(fileContent);
        const meta = attrs as Record<string, string>;
        
        posts.push({
          slug: dirEntry.name.replace(".md", ""),
          title: meta.title || "Sem título",
          excerpt: meta.excerpt || "",
          date: meta.date || new Date().toISOString(),
          image: meta.image || "",
          content: body,
        });
      }
    }
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      console.error("Error reading posts directory:", error);
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | null {
  try {
    const fileContent = Deno.readTextFileSync("./static/posts/" + slug + ".md");
    const { attrs, body } = extract(fileContent);
    const meta = attrs as Record<string, string>;
    
    return {
      slug,
      title: meta.title || "Sem título",
      excerpt: meta.excerpt || "",
      date: meta.date || new Date().toISOString(),
      image: meta.image || "",
      content: body,
    };
  } catch (e) {
    return null;
  }
}
