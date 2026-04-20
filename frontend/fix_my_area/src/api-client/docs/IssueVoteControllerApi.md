# IssueVoteControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create6**](#create6) | **POST** /api/issuevotes | |
|[**delete6**](#delete6) | **DELETE** /api/issuevotes/{id} | |
|[**getAll6**](#getall6) | **GET** /api/issuevotes | |
|[**getById6**](#getbyid6) | **GET** /api/issuevotes/{id} | |
|[**update6**](#update6) | **PUT** /api/issuevotes/{id} | |

# **create6**
> IssueVote create6(issueVote)


### Example

```typescript
import {
    IssueVoteControllerApi,
    Configuration,
    IssueVote
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueVoteControllerApi(configuration);

let issueVote: IssueVote; //

const { status, data } = await apiInstance.create6(
    issueVote
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueVote** | **IssueVote**|  | |


### Return type

**IssueVote**

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

# **delete6**
> delete6()


### Example

```typescript
import {
    IssueVoteControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueVoteControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete6(
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

# **getAll6**
> Array<IssueVote> getAll6()


### Example

```typescript
import {
    IssueVoteControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueVoteControllerApi(configuration);

const { status, data } = await apiInstance.getAll6();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<IssueVote>**

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

# **getById6**
> IssueVote getById6()


### Example

```typescript
import {
    IssueVoteControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueVoteControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById6(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueVote**

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

# **update6**
> IssueVote update6(issueVote)


### Example

```typescript
import {
    IssueVoteControllerApi,
    Configuration,
    IssueVote
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueVoteControllerApi(configuration);

let id: number; // (default to undefined)
let issueVote: IssueVote; //

const { status, data } = await apiInstance.update6(
    id,
    issueVote
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueVote** | **IssueVote**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueVote**

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

