export interface Post {
  id: string;
  permalink: string;
  media_url: string;
  alt: string;
}

interface BeholdPost {
  id: string;
  permalink: string;
  mediaUrl: string;
  altText?: string;
  prunedCaption?: string;
  sizes?: {
    small?: { mediaUrl: string };
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
    full?: { mediaUrl: string };
  };
}

interface BeholdResponse {
  posts: BeholdPost[];
}

/* Posts Jason has asked to keep off the site (they date the feed).
   Harmless once they age out of the feed naturally.
   18094953688901308 = "Happy New Year 2026" (instagram.com/p/DS71bjwjYka) */
const EXCLUDED_POST_IDS = new Set(['18094953688901308']);

/* Fetch the most recent Instagram posts from a Behold JSON feed.
   Returns `null` if the feed ID isn't configured or the request fails —
   the caller is expected to fall back to placeholders. */
export async function fetchBeholdPosts(
  feedId: string | undefined,
  limit = 4
): Promise<Post[] | null> {
  if (!feedId) return null;

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`);
    if (!res.ok) {
      console.warn(`[instagram] Behold returned ${res.status}; using placeholders.`);
      return null;
    }
    const data = (await res.json()) as BeholdResponse;
    return (data.posts ?? [])
      .filter((p) => !EXCLUDED_POST_IDS.has(p.id))
      .slice(0, limit)
      .map((p) => ({
      id: p.id,
      permalink: p.permalink,
      media_url: p.sizes?.medium?.mediaUrl ?? p.mediaUrl,
      alt:
        p.altText ||
        (p.prunedCaption ? `${p.prunedCaption.slice(0, 140)}…` : 'JBE Interiors Instagram post'),
    }));
  } catch (err) {
    console.warn('[instagram] Failed to fetch Behold feed:', err);
    return null;
  }
}
