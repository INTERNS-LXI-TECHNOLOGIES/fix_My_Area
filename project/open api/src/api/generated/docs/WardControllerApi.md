# WardControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/wards/{id} | |
|[**create**](#create) | **POST** /api/wards | |
|[**getAll**](#getall) | **GET** /api/wards | |
|[**getById**](#getbyid) | **GET** /api/wards/{id} | |
|[**update**](#update) | **PUT** /api/wards/{id} | |

# **_delete**
> _delete()


### Example

```typescript
import {
    WardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WardControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance._delete(
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

# **create**
> Ward create(ward)


### Example

```typescript
import {
    WardControllerApi,
    Configuration,
    Ward
} from './api';

const configuration = new Configuration();
const apiInstance = new WardControllerApi(configuration);

let ward: Ward; //

const { status, data } = await apiInstance.create(
    ward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ward** | **Ward**|  | |


### Return type

**Ward**

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

# **getAll**
> Array<Ward> getAll()


### Example

```typescript
import {
    WardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WardControllerApi(configuration);

const { status, data } = await apiInstance.getAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Ward>**

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

# **getById**
> Ward getById()


### Example

```typescript
import {
    WardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WardControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Ward**

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

# **update**
> Ward update(ward)


### Example

```typescript
import {
    WardControllerApi,
    Configuration,
    Ward
} from './api';

const configuration = new Configuration();
const apiInstance = new WardControllerApi(configuration);

let id: number; // (default to undefined)
let ward: Ward; //

const { status, data } = await apiInstance.update(
    id,
    ward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ward** | **Ward**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Ward**

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

