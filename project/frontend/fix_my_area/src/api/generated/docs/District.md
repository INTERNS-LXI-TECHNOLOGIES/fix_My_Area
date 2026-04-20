
# District


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`code` | string
`isActive` | boolean
`createdAt` | Date
`state` | [State](State.md)
`version` | number

## Example

```typescript
import type { District } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "code": null,
  "isActive": null,
  "createdAt": null,
  "state": null,
  "version": null,
} satisfies District

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as District
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


