
# IssueStatusHistory


## Properties

Name | Type
------------ | -------------
`id` | number
`previousStatus` | string
`newStatus` | string
`remarks` | string
`changedAt` | Date
`issue` | [Issue](Issue.md)
`authority` | [Authority](Authority.md)
`version` | number

## Example

```typescript
import type { IssueStatusHistory } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "previousStatus": null,
  "newStatus": null,
  "remarks": null,
  "changedAt": null,
  "issue": null,
  "authority": null,
  "version": null,
} satisfies IssueStatusHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueStatusHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


