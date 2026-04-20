# StateControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create2**](#create2) | **POST** /api/states | |
|[**delete2**](#delete2) | **DELETE** /api/states/{id} | |
|[**getAll2**](#getall2) | **GET** /api/states | |
|[**getById2**](#getbyid2) | **GET** /api/states/{id} | |
|[**update2**](#update2) | **PUT** /api/states/{id} | |

# **create2**
> State create2(state)


### Example

```typescript
import {
    StateControllerApi,
    Configuration,
    State
} from './api';

const configuration = new Configuration();
const apiInstance = new StateControllerApi(configuration);

let state: State; //

const { status, data } = await apiInstance.create2(
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | **State**|  | |


### Return type

**State**

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

# **delete2**
> delete2()


### Example

```typescript
import {
    StateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StateControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete2(
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

# **getAll2**
> Array<State> getAll2()


### Example

```typescript
import {
    StateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StateControllerApi(configuration);

const { status, data } = await apiInstance.getAll2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<State>**

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

# **getById2**
> State getById2()


### Example

```typescript
import {
    StateControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StateControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**State**

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

# **update2**
> State update2(state)


### Example

```typescript
import {
    StateControllerApi,
    Configuration,
    State
} from './api';

const configuration = new Configuration();
const apiInstance = new StateControllerApi(configuration);

let id: number; // (default to undefined)
let state: State; //

const { status, data } = await apiInstance.update2(
    id,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | **State**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**State**

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

