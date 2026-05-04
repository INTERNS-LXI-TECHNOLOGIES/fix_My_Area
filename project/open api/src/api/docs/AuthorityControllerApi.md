# AuthorityControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create12**](AuthorityControllerApi.md#create12) | **POST** /api/authoritys |  |
| [**delete12**](AuthorityControllerApi.md#delete12) | **DELETE** /api/authoritys/{id} |  |
| [**getAll12**](AuthorityControllerApi.md#getall12) | **GET** /api/authoritys |  |
| [**getById12**](AuthorityControllerApi.md#getbyid12) | **GET** /api/authoritys/{id} |  |
| [**update12**](AuthorityControllerApi.md#update12) | **PUT** /api/authoritys/{id} |  |



## create12

> Authority create12(authority)



### Example

```ts
import {
  Configuration,
  AuthorityControllerApi,
} from '';
import type { Create12Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityControllerApi();

  const body = {
    // Authority
    authority: ...,
  } satisfies Create12Request;

  try {
    const data = await api.create12(body);
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
| **authority** | [Authority](Authority.md) |  | |

### Return type

[**Authority**](Authority.md)

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


## delete12

> delete12(id)



### Example

```ts
import {
  Configuration,
  AuthorityControllerApi,
} from '';
import type { Delete12Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete12Request;

  try {
    const data = await api.delete12(body);
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


## getAll12

> Array&lt;Authority&gt; getAll12()



### Example

```ts
import {
  Configuration,
  AuthorityControllerApi,
} from '';
import type { GetAll12Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityControllerApi();

  try {
    const data = await api.getAll12();
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

[**Array&lt;Authority&gt;**](Authority.md)

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


## getById12

> Authority getById12(id)



### Example

```ts
import {
  Configuration,
  AuthorityControllerApi,
} from '';
import type { GetById12Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById12Request;

  try {
    const data = await api.getById12(body);
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

[**Authority**](Authority.md)

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


## update12

> Authority update12(id, authority)



### Example

```ts
import {
  Configuration,
  AuthorityControllerApi,
} from '';
import type { Update12Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityControllerApi();

  const body = {
    // number
    id: 789,
    // Authority
    authority: ...,
  } satisfies Update12Request;

  try {
    const data = await api.update12(body);
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
| **authority** | [Authority](Authority.md) |  | |

### Return type

[**Authority**](Authority.md)

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

