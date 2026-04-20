# PanchayathControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create4**](PanchayathControllerApi.md#create4) | **POST** /api/panchayaths |  |
| [**delete4**](PanchayathControllerApi.md#delete4) | **DELETE** /api/panchayaths/{id} |  |
| [**getAll4**](PanchayathControllerApi.md#getall4) | **GET** /api/panchayaths |  |
| [**getById4**](PanchayathControllerApi.md#getbyid4) | **GET** /api/panchayaths/{id} |  |
| [**update4**](PanchayathControllerApi.md#update4) | **PUT** /api/panchayaths/{id} |  |



## create4

> Panchayath create4(panchayath)



### Example

```ts
import {
  Configuration,
  PanchayathControllerApi,
} from '';
import type { Create4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PanchayathControllerApi();

  const body = {
    // Panchayath
    panchayath: ...,
  } satisfies Create4Request;

  try {
    const data = await api.create4(body);
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
| **panchayath** | [Panchayath](Panchayath.md) |  | |

### Return type

[**Panchayath**](Panchayath.md)

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


## delete4

> delete4(id)



### Example

```ts
import {
  Configuration,
  PanchayathControllerApi,
} from '';
import type { Delete4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PanchayathControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete4Request;

  try {
    const data = await api.delete4(body);
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


## getAll4

> Array&lt;Panchayath&gt; getAll4()



### Example

```ts
import {
  Configuration,
  PanchayathControllerApi,
} from '';
import type { GetAll4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PanchayathControllerApi();

  try {
    const data = await api.getAll4();
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

[**Array&lt;Panchayath&gt;**](Panchayath.md)

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


## getById4

> Panchayath getById4(id)



### Example

```ts
import {
  Configuration,
  PanchayathControllerApi,
} from '';
import type { GetById4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PanchayathControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById4Request;

  try {
    const data = await api.getById4(body);
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

[**Panchayath**](Panchayath.md)

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


## update4

> Panchayath update4(id, panchayath)



### Example

```ts
import {
  Configuration,
  PanchayathControllerApi,
} from '';
import type { Update4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PanchayathControllerApi();

  const body = {
    // number
    id: 789,
    // Panchayath
    panchayath: ...,
  } satisfies Update4Request;

  try {
    const data = await api.update4(body);
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
| **panchayath** | [Panchayath](Panchayath.md) |  | |

### Return type

[**Panchayath**](Panchayath.md)

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

