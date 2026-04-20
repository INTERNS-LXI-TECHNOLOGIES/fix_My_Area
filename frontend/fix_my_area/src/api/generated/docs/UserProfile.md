
# UserProfile


## Properties

Name | Type
------------ | -------------
`id` | number
`fullName` | string
`phoneNumber` | string
`houseNumber` | string
`aadhaarNumber` | string
`email` | string
`profilePhotoUrl` | string
`isVerified` | boolean
`citizenStatus` | string
`createdAt` | Date
`updatedAt` | Date
`ward` | [Ward](Ward.md)
`version` | number

## Example

```typescript
import type { UserProfile } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "fullName": null,
  "phoneNumber": null,
  "houseNumber": null,
  "aadhaarNumber": null,
  "email": null,
  "profilePhotoUrl": null,
  "isVerified": null,
  "citizenStatus": null,
  "createdAt": null,
  "updatedAt": null,
  "ward": null,
  "version": null,
} satisfies UserProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


