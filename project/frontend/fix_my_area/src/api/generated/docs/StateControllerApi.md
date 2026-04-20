# StateControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create2**](StateControllerApi.md#create2) | **POST** /api/states |  |
| [**delete2**](StateControllerApi.md#delete2) | **DELETE** /api/states/{id} |  |
| [**getAll2**](StateControllerApi.md#getall2) | **GET** /api/states |  |
| [**getById2**](StateControllerApi.md#getbyid2) | **GET** /api/states/{id} |  |
| [**update2**](StateControllerApi.md#update2) | **PUT** /api/states/{id} |  |



## create2

> State create2(state)



### Example

```ts
import {
  Configuration,
  StateControllerApi,
} from '';
import type { Create2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StateControllerApi();

  const body = {
    // State
    state: ...,
  } satisfies Create2Request;

  try {
    const data = await api.create2(body);
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
| **state** | [State](State.md) |  | |

### Return type

[**State**](State.md)

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


## delete2

> delete2(id)



### Example

```ts
import {
  Configuration,
  StateControllerApi,
} from '';
import type { Delete2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StateControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete2Request;

  try {
    const data = await api.delete2(body);
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


## getAll2

> Array&lt;State&gt; getAll2()



### Example

```ts
import {
  Configuration,
  StateControllerApi,
} from '';
import type { GetAll2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StateControllerApi();

  try {
    const data = await api.getAll2();
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

[**Array&lt;State&gt;**](State.md)

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


## getById2

> State getById2(id)



### Example

```ts
import {
  Configuration,
  StateControllerApi,
} from '';
import type { GetById2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StateControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById2Request;

  try {
    const data = await api.getById2(body);
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

[**State**](State.md)

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


## update2

> State update2(id, state)



### Example

```ts
import {
  Configuration,
  StateControllerApi,
} from '';
import type { Update2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new StateControllerApi();

  const body = {
    // number
    id: 789,
    // State
    state: ...,
  } satisfies Update2Request;

  try {
    const data = await api.update2(body);
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
| **state** | [State](State.md) |  | |

### Return type

[**State**](State.md)

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

