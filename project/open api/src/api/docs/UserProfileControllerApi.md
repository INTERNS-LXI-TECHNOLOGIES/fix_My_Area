# UserProfileControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create1**](UserProfileControllerApi.md#create1) | **POST** /api/user_profiles |  |
| [**delete1**](UserProfileControllerApi.md#delete1) | **DELETE** /api/user_profiles/{id} |  |
| [**getAll1**](UserProfileControllerApi.md#getall1) | **GET** /api/user_profiles |  |
| [**getById1**](UserProfileControllerApi.md#getbyid1) | **GET** /api/user_profiles/{id} |  |
| [**update1**](UserProfileControllerApi.md#update1) | **PUT** /api/user_profiles/{id} |  |



## create1

> UserProfile create1(userProfile)



### Example

```ts
import {
  Configuration,
  UserProfileControllerApi,
} from '';
import type { Create1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserProfileControllerApi();

  const body = {
    // UserProfile
    userProfile: ...,
  } satisfies Create1Request;

  try {
    const data = await api.create1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userProfile** | [UserProfile](UserProfile.md) |  | |

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete1

> delete1(id)



### Example

```ts
import {
  Configuration,
  UserProfileControllerApi,
} from '';
import type { Delete1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserProfileControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete1Request;

  try {
    const data = await api.delete1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAll1

> Array&lt;UserProfile&gt; getAll1()



### Example

```ts
import {
  Configuration,
  UserProfileControllerApi,
} from '';
import type { GetAll1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserProfileControllerApi();

  try {
    const data = await api.getAll1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;UserProfile&gt;**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getById1

> UserProfile getById1(id)



### Example

```ts
import {
  Configuration,
  UserProfileControllerApi,
} from '';
import type { GetById1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserProfileControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById1Request;

  try {
    const data = await api.getById1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update1

> UserProfile update1(id, userProfile)



### Example

```ts
import {
  Configuration,
  UserProfileControllerApi,
} from '';
import type { Update1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserProfileControllerApi();

  const body = {
    // number
    id: 789,
    // UserProfile
    userProfile: ...,
  } satisfies Update1Request;

  try {
    const data = await api.update1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |
| **userProfile** | [UserProfile](UserProfile.md) |  | |

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

