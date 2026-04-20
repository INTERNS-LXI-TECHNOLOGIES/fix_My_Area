# RegionControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create3**](#create3) | **POST** /api/regions | |
|[**delete3**](#delete3) | **DELETE** /api/regions/{id} | |
|[**getAll3**](#getall3) | **GET** /api/regions | |
|[**getById3**](#getbyid3) | **GET** /api/regions/{id} | |
|[**update3**](#update3) | **PUT** /api/regions/{id} | |

# **create3**
> Region create3(region)


### Example

```typescript
import {
    RegionControllerApi,
    Configuration,
    Region
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionControllerApi(configuration);

let region: Region; //

const { status, data } = await apiInstance.create3(
    region
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **region** | **Region**|  | |


### Return type

**Region**

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

# **delete3**
> delete3()


### Example

```typescript
import {
    RegionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete3(
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

# **getAll3**
> Array<Region> getAll3()


### Example

```typescript
import {
    RegionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionControllerApi(configuration);

const { status, data } = await apiInstance.getAll3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Region>**

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

# **getById3**
> Region getById3()


### Example

```typescript
import {
    RegionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Region**

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

# **update3**
> Region update3(region)


### Example

```typescript
import {
    RegionControllerApi,
    Configuration,
    Region
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionControllerApi(configuration);

let id: number; // (default to undefined)
let region: Region; //

const { status, data } = await apiInstance.update3(
    id,
    region
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **region** | **Region**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Region**

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

