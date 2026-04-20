# LocationControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create5**](#create5) | **POST** /api/locations | |
|[**delete5**](#delete5) | **DELETE** /api/locations/{id} | |
|[**getAll5**](#getall5) | **GET** /api/locations | |
|[**getById5**](#getbyid5) | **GET** /api/locations/{id} | |
|[**update5**](#update5) | **PUT** /api/locations/{id} | |

# **create5**
> Location create5(location)


### Example

```typescript
import {
    LocationControllerApi,
    Configuration,
    Location
} from './api';

const configuration = new Configuration();
const apiInstance = new LocationControllerApi(configuration);

let location: Location; //

const { status, data } = await apiInstance.create5(
    location
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **location** | **Location**|  | |


### Return type

**Location**

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

# **delete5**
> delete5()


### Example

```typescript
import {
    LocationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LocationControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete5(
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

# **getAll5**
> Array<Location> getAll5()


### Example

```typescript
import {
    LocationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LocationControllerApi(configuration);

const { status, data } = await apiInstance.getAll5();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Location>**

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

# **getById5**
> Location getById5()


### Example

```typescript
import {
    LocationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LocationControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById5(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Location**

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

# **update5**
> Location update5(location)


### Example

```typescript
import {
    LocationControllerApi,
    Configuration,
    Location
} from './api';

const configuration = new Configuration();
const apiInstance = new LocationControllerApi(configuration);

let id: number; // (default to undefined)
let location: Location; //

const { status, data } = await apiInstance.update5(
    id,
    location
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **location** | **Location**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Location**

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

