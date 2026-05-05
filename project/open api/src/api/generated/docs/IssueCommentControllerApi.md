# IssueCommentControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create9**](#create9) | **POST** /api/issuecomments | |
|[**delete9**](#delete9) | **DELETE** /api/issuecomments/{id} | |
|[**getAll9**](#getall9) | **GET** /api/issuecomments | |
|[**getById9**](#getbyid9) | **GET** /api/issuecomments/{id} | |
|[**update9**](#update9) | **PUT** /api/issuecomments/{id} | |

# **create9**
> IssueComment create9(issueComment)


### Example

```typescript
import {
    IssueCommentControllerApi,
    Configuration,
    IssueComment
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCommentControllerApi(configuration);

let issueId: number; // (default to undefined)
let issueComment: IssueComment; //

const { status, data } = await apiInstance.create9(
    issueId,
    issueComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueComment** | **IssueComment**|  | |
| **issueId** | [**number**] |  | defaults to undefined|


### Return type

**IssueComment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete9**
> delete9()


### Example

```typescript
import {
    IssueCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCommentControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete9(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAll9**
> Array<IssueComment> getAll9()


### Example

```typescript
import {
    IssueCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCommentControllerApi(configuration);

const { status, data } = await apiInstance.getAll9();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<IssueComment>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getById9**
> IssueComment getById9()


### Example

```typescript
import {
    IssueCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCommentControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById9(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueComment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update9**
> IssueComment update9(issueComment)


### Example

```typescript
import {
    IssueCommentControllerApi,
    Configuration,
    IssueComment
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCommentControllerApi(configuration);

let id: number; // (default to undefined)
let issueId: number; // (default to undefined)
let issueComment: IssueComment; //

const { status, data } = await apiInstance.update9(
    id,
    issueId,
    issueComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueComment** | **IssueComment**|  | |
| **id** | [**number**] |  | defaults to undefined|
| **issueId** | [**number**] |  | defaults to undefined|


### Return type

**IssueComment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

