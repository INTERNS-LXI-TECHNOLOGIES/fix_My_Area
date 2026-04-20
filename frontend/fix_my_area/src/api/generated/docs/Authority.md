
# Authority


## Properties

Name | Type
------------ | -------------
`id` | number
`fullName` | string
`phoneNumber` | string
`email` | string
`profilePhotoUrl` | string
`authorityRole` | string
`authorityType` | string
`party` | string
`jurisdictionLevel` | string
`isActive` | boolean
`termStart` | Date
`termEnd` | Date
`createdAt` | Date
`updatedAt` | Date
`version` | number

## Example

```typescript
import type { Authority } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "fullName": null,
  "phoneNumber": null,
  "email": null,
  "profilePhotoUrl": null,
  "authorityRole": null,
  "authorityType": null,
  "party": null,
  "jurisdictionLevel": null,
  "isActive": null,
  "termStart": null,
  "termEnd": null,
  "createdAt": null,
  "updatedAt": null,
  "version": null,
} satisfies Authority

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Authority
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


