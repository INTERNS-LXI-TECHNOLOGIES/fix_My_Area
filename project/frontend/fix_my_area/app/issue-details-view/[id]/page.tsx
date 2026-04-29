import CivicFeed from '../CivicFeed';

import { IssueControllerApi } from '../../../src/api/generated';

const api = new IssueControllerApi();

export default async function Page() {
  
  try {

    
    
    const issue = await api.getById8({ id: 1 });

    if (!issue) {

      return <div className="p-10 text-center">No issue found.</div>;

    }



    // ✅ Convert to array (important fix)
    const backendData = [issue];

    const mappedIssues = backendData.map((item: any) => {
      const imageList = item.photo_urls
        ? [item.photo_urls]
        : ["https://images.unsplash.com/photo-1584467541268-b040f83be3fd"];

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
        concernCount: 5,
        suggestionCount: 3,
        evidenceCount: imageList.length,

        responses:
          item.issueComments?.map((comm: any) => ({
            authorName: comm.userProfile?.fullName || "Resident",
            authorRole: comm.isFromAuthority
              ? "Official Authority"
              : "Resident",
            authorImage:
              comm.userProfile?.profilePhotoUrl ||
              `https://ui-avatars.com/api/?name=${
                comm.userProfile?.fullName || "User"
              }`,
            type: comm.isFromAuthority
              ? "EXPERT INPUT"
              : "STRONG SUPPORT",
            timeAgo: "Recently",
            content: comm.content,
            likes: 0,
          })) || [],
      };
    });

    return <CivicFeed issues={mappedIssues} />;
  } catch (error) {
    console.error("Connection Error:", error);
    return (
      <div className="p-10 text-center text-red-500">
        Backend Connection Failed
      </div>
    );
  }
}