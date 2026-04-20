# DistrictControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create11**](#create11) | **POST** /api/districts | |
|[**delete11**](#delete11) | **DELETE** /api/districts/{id} | |
|[**getAll11**](#getall11) | **GET** /api/districts | |
|[**getById11**](#getbyid11) | **GET** /api/districts/{id} | |
|[**update11**](#update11) | **PUT** /api/districts/{id} | |

# **create11**
> District create11(district)


### Example

```typescript
import {
    DistrictControllerApi,
    Configuration,
    District
} from './api';

const configuration = new Configuration();
const apiInstance = new DistrictControllerApi(configuration);

let district: District; //

const { status, data } = await apiInstance.create11(
    district
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **district** | **District**|  | |


### Return type

**District**

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

# **delete11**
> delete11()


### Example

```typescript
import {
    DistrictControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DistrictControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete11(
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

# **getAll11**
> Array<District> getAll11()


### Example

```typescript
import {
    DistrictControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DistrictControllerApi(configuration);

const { status, data } = await apiInstance.getAll11();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<District>**

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

# **getById11**
> District getById11()


### Example

```typescript
import {
    DistrictControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DistrictControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById11(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**District**

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

# **update11**
> District update11(district)


### Example

```typescript
import {
    DistrictControllerApi,
    Configuration,
    District
} from './api';

const configuration = new Configuration();
const apiInstance = new DistrictControllerApi(configuration);

let id: number; // (default to undefined)
let district: District; //

const { status, data } = await apiInstance.update11(
    id,
    district
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **district** | **District**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**District**

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

