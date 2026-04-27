# AuthorityJurisdictionControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create13**](AuthorityJurisdictionControllerApi.md#create13) | **POST** /api/authorityjurisdictions |  |
| [**delete13**](AuthorityJurisdictionControllerApi.md#delete13) | **DELETE** /api/authorityjurisdictions/{id} |  |
| [**getAll13**](AuthorityJurisdictionControllerApi.md#getall13) | **GET** /api/authorityjurisdictions |  |
| [**getById13**](AuthorityJurisdictionControllerApi.md#getbyid13) | **GET** /api/authorityjurisdictions/{id} |  |
| [**update13**](AuthorityJurisdictionControllerApi.md#update13) | **PUT** /api/authorityjurisdictions/{id} |  |



## create13

> AuthorityJurisdiction create13(authorityJurisdiction)



### Example

```ts
import {
  Configuration,
  AuthorityJurisdictionControllerApi,
} from '';
import type { Create13Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityJurisdictionControllerApi();

  const body = {
    // AuthorityJurisdiction
    authorityJurisdiction: ...,
  } satisfies Create13Request;

  try {
    const data = await api.create13(body);
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
| **authorityJurisdiction** | [AuthorityJurisdiction](AuthorityJurisdiction.md) |  | |

### Return type

[**AuthorityJurisdiction**](AuthorityJurisdiction.md)

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


## delete13

> delete13(id)



### Example

```ts
import {
  Configuration,
  AuthorityJurisdictionControllerApi,
} from '';
import type { Delete13Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityJurisdictionControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete13Request;

  try {
    const data = await api.delete13(body);
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


## getAll13

> Array&lt;AuthorityJurisdiction&gt; getAll13()



### Example

```ts
import {
  Configuration,
  AuthorityJurisdictionControllerApi,
} from '';
import type { GetAll13Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityJurisdictionControllerApi();

  try {
    const data = await api.getAll13();
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

[**Array&lt;AuthorityJurisdiction&gt;**](AuthorityJurisdiction.md)

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


## getById13

> AuthorityJurisdiction getById13(id)



### Example

```ts
import {
  Configuration,
  AuthorityJurisdictionControllerApi,
} from '';
import type { GetById13Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityJurisdictionControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById13Request;

  try {
    const data = await api.getById13(body);
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

[**AuthorityJurisdiction**](AuthorityJurisdiction.md)

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


## update13

> AuthorityJurisdiction update13(id, authorityJurisdiction)



### Example

```ts
import {
  Configuration,
  AuthorityJurisdictionControllerApi,
} from '';
import type { Update13Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthorityJurisdictionControllerApi();

  const body = {
    // number
    id: 789,
    // AuthorityJurisdiction
    authorityJurisdiction: ...,
  } satisfies Update13Request;

  try {
    const data = await api.update13(body);
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
| **authorityJurisdiction** | [AuthorityJurisdiction](AuthorityJurisdiction.md) |  | |

### Return type

[**AuthorityJurisdiction**](AuthorityJurisdiction.md)

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

