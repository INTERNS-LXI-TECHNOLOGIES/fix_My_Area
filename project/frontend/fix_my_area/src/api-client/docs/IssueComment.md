# IssueComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**content** | **string** |  | [optional] [default to undefined]
**isFromAuthority** | **boolean** |  | [optional] [default to undefined]
**isDeleted** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**issue** | [**Issue**](Issue.md) |  | [optional] [default to undefined]
**userProfile** | [**UserProfile**](UserProfile.md) |  | [optional] [default to undefined]
**authority** | [**Authority**](Authority.md) |  | [optional] [default to undefined]
**parentComment** | [**IssueComment**](IssueComment.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { IssueComment } from './api';

const instance: IssueComment = {
    id,
    content,
    isFromAuthority,
    isDeleted,
    createdAt,
    issue,
    userProfile,
    authority,
    parentComment,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
