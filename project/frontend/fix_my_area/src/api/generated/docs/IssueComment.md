
# IssueComment


## Properties

Name | Type
------------ | -------------
`id` | number
`content` | string
`isFromAuthority` | boolean
`isDeleted` | boolean
`createdAt` | Date
`userProfile` | [UserProfile](UserProfile.md)
`authority` | [Authority](Authority.md)
`parentComment` | [IssueComment](IssueComment.md)
`version` | number

## Example

```typescript
import type { IssueComment } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "content": null,
  "isFromAuthority": null,
  "isDeleted": null,
  "createdAt": null,
  "userProfile": null,
  "authority": null,
  "parentComment": null,
  "version": null,
} satisfies IssueComment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueComment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


