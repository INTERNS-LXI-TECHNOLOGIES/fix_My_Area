# DistrictControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create11**](DistrictControllerApi.md#create11) | **POST** /api/districts |  |
| [**delete11**](DistrictControllerApi.md#delete11) | **DELETE** /api/districts/{id} |  |
| [**getAll11**](DistrictControllerApi.md#getall11) | **GET** /api/districts |  |
| [**getById11**](DistrictControllerApi.md#getbyid11) | **GET** /api/districts/{id} |  |
| [**update11**](DistrictControllerApi.md#update11) | **PUT** /api/districts/{id} |  |



## create11

> District create11(district)



### Example

```ts
import {
  Configuration,
  DistrictControllerApi,
} from '';
import type { Create11Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DistrictControllerApi();

  const body = {
    // District
    district: ...,
  } satisfies Create11Request;

  try {
    const data = await api.create11(body);
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
| **district** | [District](District.md) |  | |

### Return type

[**District**](District.md)

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


## delete11

> delete11(id)



### Example

```ts
import {
  Configuration,
  DistrictControllerApi,
} from '';
import type { Delete11Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DistrictControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete11Request;

  try {
    const data = await api.delete11(body);
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


## getAll11

> Array&lt;District&gt; getAll11()



### Example

```ts
import {
  Configuration,
  DistrictControllerApi,
} from '';
import type { GetAll11Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DistrictControllerApi();

  try {
    const data = await api.getAll11();
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

[**Array&lt;District&gt;**](District.md)

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


## getById11

> District getById11(id)



### Example

```ts
import {
  Configuration,
  DistrictControllerApi,
} from '';
import type { GetById11Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DistrictControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById11Request;

  try {
    const data = await api.getById11(body);
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

[**District**](District.md)

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


## update11

> District update11(id, district)



### Example

```ts
import {
  Configuration,
  DistrictControllerApi,
} from '';
import type { Update11Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DistrictControllerApi();

  const body = {
    // number
    id: 789,
    // District
    district: ...,
  } satisfies Update11Request;

  try {
    const data = await api.update11(body);
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
| **district** | [District](District.md) |  | |

### Return type

[**District**](District.md)

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

