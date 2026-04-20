
# IssueCategory


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`iconUrl` | string
`isActive` | boolean
`displayOrder` | number
`createdAt` | Date
`version` | number

## Example

```typescript
import type { IssueCategory } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "iconUrl": null,
  "isActive": null,
  "displayOrder": null,
  "createdAt": null,
  "version": null,
} satisfies IssueCategory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueCategory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


