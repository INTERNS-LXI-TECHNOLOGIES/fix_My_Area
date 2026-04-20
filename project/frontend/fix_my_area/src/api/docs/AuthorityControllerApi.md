# AuthorityControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create12**](#create12) | **POST** /api/authoritys | |
|[**delete12**](#delete12) | **DELETE** /api/authoritys/{id} | |
|[**getAll12**](#getall12) | **GET** /api/authoritys | |
|[**getById12**](#getbyid12) | **GET** /api/authoritys/{id} | |
|[**update12**](#update12) | **PUT** /api/authoritys/{id} | |

# **create12**
> Authority create12(authority)


### Example

```typescript
import {
    AuthorityControllerApi,
    Configuration,
    Authority
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityControllerApi(configuration);

let authority: Authority; //

const { status, data } = await apiInstance.create12(
    authority
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authority** | **Authority**|  | |


### Return type

**Authority**

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

# **delete12**
> delete12()


### Example

```typescript
import {
    AuthorityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete12(
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

# **getAll12**
> Array<Authority> getAll12()


### Example

```typescript
import {
    AuthorityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityControllerApi(configuration);

const { status, data } = await apiInstance.getAll12();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Authority>**

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

# **getById12**
> Authority getById12()


### Example

```typescript
import {
    AuthorityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById12(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Authority**

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

# **update12**
> Authority update12(authority)


### Example

```typescript
import {
    AuthorityControllerApi,
    Configuration,
    Authority
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityControllerApi(configuration);

let id: number; // (default to undefined)
let authority: Authority; //

const { status, data } = await apiInstance.update12(
    id,
    authority
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authority** | **Authority**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Authority**

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

