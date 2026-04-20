# IssueStatusHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**previousStatus** | **string** |  | [optional] [default to undefined]
**newStatus** | **string** |  | [optional] [default to undefined]
**remarks** | **string** |  | [optional] [default to undefined]
**changedAt** | **string** |  | [optional] [default to undefined]
**issue** | [**Issue**](Issue.md) |  | [optional] [default to undefined]
**authority** | [**Authority**](Authority.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { IssueStatusHistory } from './api';

const instance: IssueStatusHistory = {
    id,
    previousStatus,
    newStatus,
    remarks,
    changedAt,
    issue,
    authority,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
