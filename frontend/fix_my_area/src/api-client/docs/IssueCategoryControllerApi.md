# IssueCategoryControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create10**](#create10) | **POST** /api/issuecategorys | |
|[**delete10**](#delete10) | **DELETE** /api/issuecategorys/{id} | |
|[**getAll10**](#getall10) | **GET** /api/issuecategorys | |
|[**getById10**](#getbyid10) | **GET** /api/issuecategorys/{id} | |
|[**update10**](#update10) | **PUT** /api/issuecategorys/{id} | |

# **create10**
> IssueCategory create10(issueCategory)


### Example

```typescript
import {
    IssueCategoryControllerApi,
    Configuration,
    IssueCategory
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCategoryControllerApi(configuration);

let issueCategory: IssueCategory; //

const { status, data } = await apiInstance.create10(
    issueCategory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueCategory** | **IssueCategory**|  | |


### Return type

**IssueCategory**

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

# **delete10**
> delete10()


### Example

```typescript
import {
    IssueCategoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCategoryControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete10(
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

# **getAll10**
> Array<IssueCategory> getAll10()


### Example

```typescript
import {
    IssueCategoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCategoryControllerApi(configuration);

const { status, data } = await apiInstance.getAll10();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<IssueCategory>**

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

# **getById10**
> IssueCategory getById10()


### Example

```typescript
import {
    IssueCategoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCategoryControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById10(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueCategory**

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

# **update10**
> IssueCategory update10(issueCategory)


### Example

```typescript
import {
    IssueCategoryControllerApi,
    Configuration,
    IssueCategory
} from './api';

const configuration = new Configuration();
const apiInstance = new IssueCategoryControllerApi(configuration);

let id: number; // (default to undefined)
let issueCategory: IssueCategory; //

const { status, data } = await apiInstance.update10(
    id,
    issueCategory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueCategory** | **IssueCategory**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**IssueCategory**

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

