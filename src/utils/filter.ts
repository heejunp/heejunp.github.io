import type { CollectionEntry } from "astro:content";

/**
 * 블로그 포스트 필터링 함수
 */
export function filterPosts(
  posts: CollectionEntry<"blog">[],
  category?: string | null,
  tags: string[] = []
): CollectionEntry<"blog">[] {
  let filtered = posts;

  if (category) {
    filtered = filtered.filter((post) => post.data.category === category);
  }

  if (tags.length > 0) {
    filtered = filtered.filter((post) => {
      const postTags = post.data.tags || [];
      return tags.every((tag) => postTags.includes(tag));
    });
  }

  return filtered.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/**
 * URL 파라미터에서 현재 필터 상태 가져오기
 */
export function getCurrentParams(): {
  category: string | null;
  tags: string[];
} {
  if (typeof window === "undefined") {
    return { category: null, tags: [] };
  }

  const urlParams = new URLSearchParams(window.location.search);
  return {
    category: urlParams.get("category"),
    tags: urlParams.getAll("tag"),
  };
}

/**
 * 블로그 URL 생성 (카테고리와 태그 포함)
 */
export function buildBlogUrl(
  category?: string | null,
  tags: string[] = []
): string {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  tags.forEach((tag) => {
    params.append("tag", tag);
  });

  return params.toString() ? `/blog?${params.toString()}` : "/blog";
}
