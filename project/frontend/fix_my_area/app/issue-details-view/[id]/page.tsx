import CivicFeed from '../CivicFeed';

import { IssueControllerApi } from '../../../src/api/generated';

const api = new IssueControllerApi();

export default async function Page() {
  try {
    const issue = await api.getById8({ id: 1 });

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
  } catch (error) {
    return (
      <div className="p-10 text-center text-red-500">
        Backend Connection Failed
      </div>
    );
  }
}