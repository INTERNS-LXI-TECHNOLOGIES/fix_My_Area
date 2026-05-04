
# Location


## Properties

Name | Type
------------ | -------------
`id` | number
`latitude` | number
`longitude` | number
`locationDescription` | string
`issue` | [Issue](Issue.md)
`version` | number

## Example

```typescript
import type { Location } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "latitude": null,
  "longitude": null,
  "locationDescription": null,
  "issue": null,
  "version": null,
} satisfies Location

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Location
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


