# IssueControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create8**](#create8) | **POST** /api/issues | |
|[**delete8**](#delete8) | **DELETE** /api/issues/{id} | |
|[**getAll8**](#getall8) | **GET** /api/issues | |
|[**getById8**](#getbyid8) | **GET** /api/issues/{id} | |
|[**update8**](#update8) | **PUT** /api/issues/{id} | |

# **create8**
> Issue create8(issue)


### Example

```typescript
import {
    IssueControllerApi,
    Configuration,
    Issue
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueControllerApi(configuration);

let issue: Issue; //

const { status, data } = await apiInstance.create8(
    issue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issue** | **Issue**|  | |


### Return type

**Issue**

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

# **delete8**
> delete8()


### Example

```typescript
import {
    IssueControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete8(
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

# **getAll8**
> Array<Issue> getAll8()


### Example

```typescript
import {
    IssueControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueControllerApi(configuration);

const { status, data } = await apiInstance.getAll8();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Issue>**

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

# **getById8**
> Issue getById8()


### Example

```typescript
import {
    IssueControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById8(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Issue**

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

# **update8**
> Issue update8(issue)


### Example

```typescript
import {
    IssueControllerApi,
    Configuration,
    Issue
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueControllerApi(configuration);

let id: number; // (default to undefined)
let issue: Issue; //

const { status, data } = await apiInstance.update8(
    id,
    issue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issue** | **Issue**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Issue**

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

