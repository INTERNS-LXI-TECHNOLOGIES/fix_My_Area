# AuthorityJurisdictionControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create13**](#create13) | **POST** /api/authorityjurisdictions | |
|[**delete13**](#delete13) | **DELETE** /api/authorityjurisdictions/{id} | |
|[**getAll13**](#getall13) | **GET** /api/authorityjurisdictions | |
|[**getById13**](#getbyid13) | **GET** /api/authorityjurisdictions/{id} | |
|[**update13**](#update13) | **PUT** /api/authorityjurisdictions/{id} | |

# **create13**
> AuthorityJurisdiction create13(authorityJurisdiction)


### Example

```typescript
import {
    AuthorityJurisdictionControllerApi,
    Configuration,
    AuthorityJurisdiction
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityJurisdictionControllerApi(configuration);

let authorityJurisdiction: AuthorityJurisdiction; //

const { status, data } = await apiInstance.create13(
    authorityJurisdiction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorityJurisdiction** | **AuthorityJurisdiction**|  | |


### Return type

**AuthorityJurisdiction**

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

# **delete13**
> delete13()


### Example

```typescript
import {
    AuthorityJurisdictionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityJurisdictionControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete13(
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

# **getAll13**
> Array<AuthorityJurisdiction> getAll13()


### Example

```typescript
import {
    AuthorityJurisdictionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityJurisdictionControllerApi(configuration);

const { status, data } = await apiInstance.getAll13();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AuthorityJurisdiction>**

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

# **getById13**
> AuthorityJurisdiction getById13()


### Example

```typescript
import {
    AuthorityJurisdictionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityJurisdictionControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById13(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**AuthorityJurisdiction**

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

# **update13**
> AuthorityJurisdiction update13(authorityJurisdiction)


### Example

```typescript
import {
    AuthorityJurisdictionControllerApi,
    Configuration,
    AuthorityJurisdiction
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorityJurisdictionControllerApi(configuration);

let id: number; // (default to undefined)
let authorityJurisdiction: AuthorityJurisdiction; //

const { status, data } = await apiInstance.update13(
    id,
    authorityJurisdiction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorityJurisdiction** | **AuthorityJurisdiction**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**AuthorityJurisdiction**

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

