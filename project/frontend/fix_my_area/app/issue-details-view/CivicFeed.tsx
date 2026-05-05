'use client';

       import React, { useState } from 'react';
       import {IssueVoteControllerApi} from '../../src/api/generated';

       import Link from 'next/link';

       const issueVoteControllerApi = new IssueVoteControllerApi();


       export default function CivicFeed({ issues = [] }: any) {

         const [openIssueId, setOpenIssueId] = useState<string | null>(null);

         return (
           <div className="p-4 space-y-6 bg-red-500 min-h-screen">

             {issues.map((issue: any) => (
               <div key={issue.id} className="bg-white rounded-xl shadow-md overflow-hidden">

                 {/* HEADER */}
                 <div className="p-4 border-b">
                   <div className="flex items-center justify-between">
                     <h2 className="text-lg font-bold text-red-600">{issue.title}</h2>

                     <span className={`text-xs px-2 py-1 rounded-full ${
                       issue.status === 'VALIDATED'
                         ? 'bg-green-100 text-green-700'
                         : 'bg-yellow-100 text-yellow-700'
                     }`}>
                       {issue.status || 'PENDING'}
                     </span>
                   </div>

                   <p className="text-xs text-gray-500 mt-1">
                     ID #{issue.id}
                   </p>

                   <div className="flex gap-2 mt-3 flex-wrap">
                     {issue.category && (
                       <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                         {issue.category}
                       </span>
                     )}

                     {issue.locationName && (
                       <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                         {issue.locationName}
                       </span>
                     )}

                     <a
                       href={`https://www.google.com/maps?q=${issue.latitude},${issue.longitude}`}
                       target="_blank"
                       className="text-xs text-blue-600 hover:underline"
                     >
                       Open in Maps
                     </a>

                     <div><p>{issue.ward}</p></div>
                   </div>
                 </div>

                 {/* MAP */}
                 <div className="relative">
                   <img
                     src={`https://maps.googleapis.com/maps/api/staticmap?center=${issue.latitude},${issue.longitude}&zoom=15&size=600x200&markers=color:red%7C${issue.latitude},${issue.longitude}&key=YOUR_API_KEY`}
                     className="w-full h-40 object-cover bg-gray-200"
                     alt="Map location"
                   />

                   <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                     Affected Area
                   </div>
                 </div>

                 {/* DEADLINE */}
                 <div className="px-4 py-2 text-sm text-red-500 font-medium">
                   {issue.deadline ? `Deadline: ${issue.deadline}` : 'No deadline set'}
                 </div>

                 {/* EVIDENCE */}
                 <div className="px-4">
                   <h3 className="font-semibold text-sm mb-2">Evidence</h3>

                   <div className="flex gap-2 overflow-x-auto pb-2">
                     {issue.media?.map((item: any, index: number) => (
                       <div key={index} className="w-28 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                         <img src={item.url} className="w-full h-full object-cover" alt="Evidence" />
                       </div>
                     )) || (
                       <p className="text-xs text-gray-400 italic">
                         No evidence uploaded
                       </p>
                     )}
                   </div>
                 </div>

                 {/* STATS */}
                 <div className="px-4 mt-2 flex gap-3 text-sm">
                   <span className="text-green-600 font-semibold">
                     Support {issue.supportCount || 0}
                   </span>

                   <span className="text-gray-500">
                     Concerns {issue.concernCount || 0}
                   </span>

                   <span className="text-gray-500">
                     Suggestions {issue.suggestionCount || 0}
                   </span>
                 </div>

                 {/* TOGGLE COMMENTS */}
                 <div className="px-4 mt-3 pb-4">
                   <button
                     onClick={() =>
                       setOpenIssueId(openIssueId === issue.id ? null : issue.id)
                     }
                     className="text-blue-600 font-semibold text-sm"
                   >
                     {openIssueId === issue.id
                       ? "Hide Comments"
                       : `View Comments (${issue.responses?.length || 0})`}
                   </button>
                 </div>

                 {/* COMMENTS */}
                 {openIssueId === issue.id && (
                   <div className="px-4 py-4 bg-gray-50 border-t space-y-3">
                     {issue.responses?.map((response: any) => (
                       <div key={response.id} className="border-b last:border-0 pb-2">
                         <p className="text-sm font-medium text-gray-800">
                           {response.content}
                         </p>

                         <p className="text-[10px] text-gray-400">
                           {response.userName} • {response.createdAt}
                         </p>

                         {response.replies?.map((reply: any) => (
                           <div
                             key={reply.id}
                             className="ml-4 mt-1 text-xs text-gray-600 border-l-2 pl-2"
                           >
                             ↳ {reply.content}
                           </div>
                         ))}
                       </div>
                     ))}
                   </div>
                 )}

                 {/* ✅ ACTION BUTTONS (CORRECT PLACE) */}
                 <div className="px-4 pb-4">
                   <ActionButtons issueId={issue.id} />
                 </div>

               </div>
             ))}
           </div>
         );
       }


       function ActionButtons({issueId}: any) {


     async function handleSupport() {
       try {
         const response = await fetch('http://localhost:8080/api/issuevotes', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
             issueId: Number(issueId),
             userProfileId: 1
           }),
         });

         if (response.ok) {
           window.location.reload();
         } else {
           // ഈ await വർക്ക് ചെയ്യണമെങ്കിൽ മുകളിൽ async വേണം
           const errorText = await response.text();
           console.error("Backend Error:", errorText);
         }
       } catch (error) {
         console.error("Error:", error);
       }
     }
return(

              <div className="flex flex-wrap gap-2 mt-4">

              <button

              onClick={handleSupport}
              className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
              >Support</button>

              <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600">Raise Concern</button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">Add Evidence</button>
                
<Link 

  href={`/issue-details-view/make-a-comments/editor?issueId=${issueId}`}
  className="bg-purple-500 text-white px-3 py-1 rounded text-xs hover:bg-purple-600 inline-block text-center"
>

  Add Comments

</Link>
</div>

);

}








