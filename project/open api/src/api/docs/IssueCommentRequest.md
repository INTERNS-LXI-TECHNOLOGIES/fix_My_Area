
# IssueCommentRequest


## Properties

Name | Type
------------ | -------------
`content` | string
`isFromAuthority` | boolean
`isDeleted` | boolean
`issueId` | number
`userProfileId` | number

## Example

```typescript
import type { IssueCommentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "isFromAuthority": null,
  "isDeleted": null,
  "issueId": null,
  "userProfileId": null,
} satisfies IssueCommentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueCommentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


