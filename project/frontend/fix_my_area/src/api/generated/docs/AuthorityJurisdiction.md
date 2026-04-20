
# AuthorityJurisdiction


## Properties

Name | Type
------------ | -------------
`id` | number
`jurisdictionLevel` | string
`referenceId` | number
`referenceName` | string
`isPrimary` | boolean
`createdAt` | Date
`authority` | [Authority](Authority.md)
`version` | number

## Example

```typescript
import type { AuthorityJurisdiction } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "jurisdictionLevel": null,
  "referenceId": null,
  "referenceName": null,
  "isPrimary": null,
  "createdAt": null,
  "authority": null,
  "version": null,
} satisfies AuthorityJurisdiction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthorityJurisdiction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


