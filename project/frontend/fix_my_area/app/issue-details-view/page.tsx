import CivicFeed from './CivicFeed';

import { IssueControllerApi, Configuration } from '../../src/api/generated';

const config = new Configuration({
  basePath: 'http://localhost:8080',
});

const api = new IssueControllerApi(config);

export default async function Page() {
  try {
    // 1. Fetch data from Spring Boot
    const backendData = await api.getAll8(); 

    if (!backendData || backendData.length === 0) {
      return <div className="p-10 text-center">No issues found.</div>;
    }

    // 2. Map the data inside the try block so 'backendData' is defined
const mappedIssues = backendData.map((item: any) => {
  // Safe Image fallback
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
    affectedAreaMapImage: "https://images.unsplash.com/photo-1598425121966-2b4f9f75a6c1",
    images: imageList,
    
    // Dynamic Stats from Issue Table
    supportCount: item.voteCount || item.vote_count || 0,
    concernCount: 5, 
    suggestionCount: 3,
    evidenceCount: imageList.length,

    // --- MAPPING THE ACTUAL COMMANDS (COMMENTS) ---
    responses: item.issueComments?.map((comm: any) => ({
      // Pulling 'Sunil PN' from userProfile
      authorName: comm.userProfile?.fullName || "Resident", 
      
      // Checking the bit flag for 'Authority' or 'Resident'
      authorRole: comm.isFromAuthority ? "Official Authority" : "Resident",
      
      authorImage: comm.userProfile?.profilePhotoUrl || 
        `https://ui-avatars.com/api/?name=${comm.userProfile?.fullName || 'User'}`,
      
      // UI Labeling logic
      type: comm.isFromAuthority ? 'EXPERT INPUT' : 'STRONG SUPPORT',
      
      timeAgo: "Recently", 
      
      // THIS IS THE KEY: Displaying the 'content' column from MySQL
      content: comm.content, 
      
      likes: 0
    })) || [] // Default to empty array if no commands exist
  };
});

    return <CivicFeed issues={mappedIssues} />;
    
  } catch (error) {
    console.error("Connection Error:", error);
    return <div className="p-10 text-center text-red-500">Backend Connection Failed</div>;
  }
}