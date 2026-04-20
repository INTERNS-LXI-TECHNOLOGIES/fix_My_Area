# LocationControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create5**](LocationControllerApi.md#create5) | **POST** /api/locations |  |
| [**delete5**](LocationControllerApi.md#delete5) | **DELETE** /api/locations/{id} |  |
| [**getAll5**](LocationControllerApi.md#getall5) | **GET** /api/locations |  |
| [**getById5**](LocationControllerApi.md#getbyid5) | **GET** /api/locations/{id} |  |
| [**update5**](LocationControllerApi.md#update5) | **PUT** /api/locations/{id} |  |



## create5

> Location create5(location)



### Example

```ts
import {
  Configuration,
  LocationControllerApi,
} from '';
import type { Create5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LocationControllerApi();

  const body = {
    // Location
    location: ...,
  } satisfies Create5Request;

  try {
    const data = await api.create5(body);
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
| **location** | [Location](Location.md) |  | |

### Return type

[**Location**](Location.md)

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


## delete5

> delete5(id)



### Example

```ts
import {
  Configuration,
  LocationControllerApi,
} from '';
import type { Delete5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LocationControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete5Request;

  try {
    const data = await api.delete5(body);
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


## getAll5

> Array&lt;Location&gt; getAll5()



### Example

```ts
import {
  Configuration,
  LocationControllerApi,
} from '';
import type { GetAll5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LocationControllerApi();

  try {
    const data = await api.getAll5();
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

[**Array&lt;Location&gt;**](Location.md)

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


## getById5

> Location getById5(id)



### Example

```ts
import {
  Configuration,
  LocationControllerApi,
} from '';
import type { GetById5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LocationControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById5Request;

  try {
    const data = await api.getById5(body);
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

[**Location**](Location.md)

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


## update5

> Location update5(id, location)



### Example

```ts
import {
  Configuration,
  LocationControllerApi,
} from '';
import type { Update5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LocationControllerApi();

  const body = {
    // number
    id: 789,
    // Location
    location: ...,
  } satisfies Update5Request;

  try {
    const data = await api.update5(body);
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
| **location** | [Location](Location.md) |  | |

### Return type

[**Location**](Location.md)

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

