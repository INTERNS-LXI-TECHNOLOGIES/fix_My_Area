
# Issue


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`description` | string
`photoUrls` | string
`videoUrl` | string
`location` | [Location](Location.md)
`visibilityLevel` | string
`issueStatus` | string
`priorityLevel` | string
`isDeleted` | boolean
`createdAt` | Date
`updatedAt` | Date
`resolvedAt` | Date
`expectedResolutionDate` | Date
`voteCount` | number
`panchayathId` | number
`regionId` | number
`districtId` | number
`stateId` | number
`assignedAt` | Date
`userProfile` | [UserProfile](UserProfile.md)
`ward` | [Ward](Ward.md)
`issueCategory` | [IssueCategory](IssueCategory.md)
`assignedAuthority` | [Authority](Authority.md)
`version` | number
`issueComments` | [Array&lt;IssueComment&gt;](IssueComment.md)

## Example

```typescript
import type { Issue } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "description": null,
  "photoUrls": null,
  "videoUrl": null,
  "location": null,
  "visibilityLevel": null,
  "issueStatus": null,
  "priorityLevel": null,
  "isDeleted": null,
  "createdAt": null,
  "updatedAt": null,
  "resolvedAt": null,
  "expectedResolutionDate": null,
  "voteCount": null,
  "panchayathId": null,
  "regionId": null,
  "districtId": null,
  "stateId": null,
  "assignedAt": null,
  "userProfile": null,
  "ward": null,
  "issueCategory": null,
  "assignedAuthority": null,
  "version": null,
  "issueComments": null,
} satisfies Issue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Issue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


