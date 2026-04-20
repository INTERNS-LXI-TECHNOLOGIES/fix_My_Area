# RegionControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create3**](RegionControllerApi.md#create3) | **POST** /api/regions |  |
| [**delete3**](RegionControllerApi.md#delete3) | **DELETE** /api/regions/{id} |  |
| [**getAll3**](RegionControllerApi.md#getall3) | **GET** /api/regions |  |
| [**getById3**](RegionControllerApi.md#getbyid3) | **GET** /api/regions/{id} |  |
| [**update3**](RegionControllerApi.md#update3) | **PUT** /api/regions/{id} |  |



## create3

> Region create3(region)



### Example

```ts
import {
  Configuration,
  RegionControllerApi,
} from '';
import type { Create3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RegionControllerApi();

  const body = {
    // Region
    region: ...,
  } satisfies Create3Request;

  try {
    const data = await api.create3(body);
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
| **region** | [Region](Region.md) |  | |

### Return type

[**Region**](Region.md)

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


## delete3

> delete3(id)



### Example

```ts
import {
  Configuration,
  RegionControllerApi,
} from '';
import type { Delete3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RegionControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete3Request;

  try {
    const data = await api.delete3(body);
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


## getAll3

> Array&lt;Region&gt; getAll3()



### Example

```ts
import {
  Configuration,
  RegionControllerApi,
} from '';
import type { GetAll3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RegionControllerApi();

  try {
    const data = await api.getAll3();
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

[**Array&lt;Region&gt;**](Region.md)

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


## getById3

> Region getById3(id)



### Example

```ts
import {
  Configuration,
  RegionControllerApi,
} from '';
import type { GetById3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RegionControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById3Request;

  try {
    const data = await api.getById3(body);
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

[**Region**](Region.md)

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


## update3

> Region update3(id, region)



### Example

```ts
import {
  Configuration,
  RegionControllerApi,
} from '';
import type { Update3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RegionControllerApi();

  const body = {
    // number
    id: 789,
    // Region
    region: ...,
  } satisfies Update3Request;

  try {
    const data = await api.update3(body);
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
| **region** | [Region](Region.md) |  | |

### Return type

[**Region**](Region.md)

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

