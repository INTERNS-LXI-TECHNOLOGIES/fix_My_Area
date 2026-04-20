# PanchayathControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create4**](#create4) | **POST** /api/panchayaths | |
|[**delete4**](#delete4) | **DELETE** /api/panchayaths/{id} | |
|[**getAll4**](#getall4) | **GET** /api/panchayaths | |
|[**getById4**](#getbyid4) | **GET** /api/panchayaths/{id} | |
|[**update4**](#update4) | **PUT** /api/panchayaths/{id} | |

# **create4**
> Panchayath create4(panchayath)


### Example

```typescript
import {
    PanchayathControllerApi,
    Configuration,
    Panchayath
} from './api';

const configuration = new Configuration();
const apiInstance = new PanchayathControllerApi(configuration);

let panchayath: Panchayath; //

const { status, data } = await apiInstance.create4(
    panchayath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **panchayath** | **Panchayath**|  | |


### Return type

**Panchayath**

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

# **delete4**
> delete4()


### Example

```typescript
import {
    PanchayathControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PanchayathControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete4(
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

# **getAll4**
> Array<Panchayath> getAll4()


### Example

```typescript
import {
    PanchayathControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PanchayathControllerApi(configuration);

const { status, data } = await apiInstance.getAll4();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Panchayath>**

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

# **getById4**
> Panchayath getById4()


### Example

```typescript
import {
    PanchayathControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PanchayathControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById4(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Panchayath**

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

# **update4**
> Panchayath update4(panchayath)


### Example

```typescript
import {
    PanchayathControllerApi,
    Configuration,
    Panchayath
} from './api';

const configuration = new Configuration();
const apiInstance = new PanchayathControllerApi(configuration);

let id: number; // (default to undefined)
let panchayath: Panchayath; //

const { status, data } = await apiInstance.update4(
    id,
    panchayath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **panchayath** | **Panchayath**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Panchayath**

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

