import CivicFeed from '../CivicFeed';

import { IssueControllerApi, Configuration } from '../../../src/api/generated';

const api = new IssueControllerApi(new Configuration({ basePath: "http://127.0.0.1:8080" }));

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const issueId = parseInt(resolvedParams.id, 10);
    const res = await fetch(`http://127.0.0.1:8080/api/issues/${issueId}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    const issue = await res.json();

    if (!issue) {
      return <div className="p-10 text-center">No issue found.</div>;
    }

    const backendData = [issue];

    const mappedIssues = backendData.map((item: any) => {
      const imageList = item.photo_urls
        ? [item.photo_urls]
        : ["https://images.unsplash.com/photo-1584467541268-b040f83be3fd"];

      const comments = item.issueComments || [];

      const mainComments = comments.filter(
        (c: any) => !c.parentComment && !c.parent_comment_id
      );

      const replies = comments.filter(
        (c: any) => c.parentComment || c.parent_comment_id
      );

      return {
        id: item.id?.toString() || "1",
        title: item.title || "Untitled",
        status: item.issue_status || "RAISED",
        category: "Infrastructure",
        ward: "Ward 1",
        deadline: 3,
        affectedAreaMapImage:
          "https://images.unsplash.com/photo-1598425121966-2b4f9f75a6c1",
        images: imageList,

        supportCount: item.voteCount || item.vote_count || 0,

        // ✅ comments mapped
        responses: mainComments.map((comm: any) => ({
          id: comm.id,
          content: comm.content,

          replies: replies
            .filter((r: any) =>
              r.parentComment?.id
                ? r.parentComment.id === comm.id
                : r.parent_comment_id === comm.id
            )
            .map((r: any) => ({
              id: r.id,
              content: r.content,
            })),
        })),
      };
    });

    return <CivicFeed issues={mappedIssues} />;
  } catch (error: any) {
    let msg = error.stack || String(error);
    if (error.response) {
      msg = `Status: ${error.response.status} ${error.response.statusText}`;
    }
    console.error("PAGE ERROR FETCHING ISSUE:", msg);
    return (
      <div className="p-10 text-center text-red-500">
        Backend Connection Failed: {msg}
      </div>
    );
  }
}