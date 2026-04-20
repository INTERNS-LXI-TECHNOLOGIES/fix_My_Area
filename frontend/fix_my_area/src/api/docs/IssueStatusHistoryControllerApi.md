# IssueStatusHistoryControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create7**](#create7) | **POST** /api/issuestatushistorys | |
|[**delete7**](#delete7) | **DELETE** /api/issuestatushistorys/{id} | |
|[**getAll7**](#getall7) | **GET** /api/issuestatushistorys | |
|[**getById7**](#getbyid7) | **GET** /api/issuestatushistorys/{id} | |
|[**update7**](#update7) | **PUT** /api/issuestatushistorys/{id} | |

# **create7**
> IssueStatusHistory create7(issueStatusHistory)


### Example

```typescript
import {
    IssueStatusHistoryControllerApi,
    Configuration,
    IssueStatusHistory
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueStatusHistoryControllerApi(configuration);

let issueStatusHistory: IssueStatusHistory; //

const { status, data } = await apiInstance.create7(
    issueStatusHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueStatusHistory** | **IssueStatusHistory**|  | |


### Return type

**IssueStatusHistory**

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

# **delete7**
> delete7()


### Example

```typescript
import {
    IssueStatusHistoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueStatusHistoryControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete7(
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

# **getAll7**
> Array<IssueStatusHistory> getAll7()


### Example

```typescript
import {
    IssueStatusHistoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueStatusHistoryControllerApi(configuration);

const { status, data } = await apiInstance.getAll7();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<IssueStatusHistory>**

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

# **getById7**
> IssueStatusHistory getById7()


### Example

```typescript
import {
    IssueStatusHistoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueStatusHistoryControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById7(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueStatusHistory**

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

# **update7**
> IssueStatusHistory update7(issueStatusHistory)


### Example

```typescript
import {
    IssueStatusHistoryControllerApi,
    Configuration,
    IssueStatusHistory
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueStatusHistoryControllerApi(configuration);

let id: number; // (default to undefined)
let issueStatusHistory: IssueStatusHistory; //

const { status, data } = await apiInstance.update7(
    id,
    issueStatusHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueStatusHistory** | **IssueStatusHistory**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueStatusHistory**

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

