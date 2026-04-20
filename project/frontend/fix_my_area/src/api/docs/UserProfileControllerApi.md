# UserProfileControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create1**](#create1) | **POST** /api/user_profiles | |
|[**delete1**](#delete1) | **DELETE** /api/user_profiles/{id} | |
|[**getAll1**](#getall1) | **GET** /api/user_profiles | |
|[**getById1**](#getbyid1) | **GET** /api/user_profiles/{id} | |
|[**update1**](#update1) | **PUT** /api/user_profiles/{id} | |

# **create1**
> UserProfile create1(userProfile)


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration,
    UserProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

let userProfile: UserProfile; //

const { status, data } = await apiInstance.create1(
    userProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userProfile** | **UserProfile**|  | |


### Return type

**UserProfile**

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

# **delete1**
> delete1()


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete1(
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

# **getAll1**
> Array<UserProfile> getAll1()


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

const { status, data } = await apiInstance.getAll1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserProfile>**

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

# **getById1**
> UserProfile getById1()


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getById1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**UserProfile**

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

# **update1**
> UserProfile update1(userProfile)


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration,
    UserProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

let id: number; // (default to undefined)
let userProfile: UserProfile; //

const { status, data } = await apiInstance.update1(
    id,
    userProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userProfile** | **UserProfile**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**UserProfile**

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

