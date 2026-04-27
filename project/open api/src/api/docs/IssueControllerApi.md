# IssueControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create8**](IssueControllerApi.md#create8) | **POST** /api/issues |  |
| [**delete8**](IssueControllerApi.md#delete8) | **DELETE** /api/issues/{id} |  |
| [**getAll8**](IssueControllerApi.md#getall8) | **GET** /api/issues |  |
| [**getById8**](IssueControllerApi.md#getbyid8) | **GET** /api/issues/{id} |  |
| [**update8**](IssueControllerApi.md#update8) | **PUT** /api/issues/{id} |  |



## create8

> Issue create8(issue)



### Example

```ts
import {
  Configuration,
  IssueControllerApi,
} from '';
import type { Create8Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueControllerApi();

  const body = {
    // Issue
    issue: ...,
  } satisfies Create8Request;

  try {
    const data = await api.create8(body);
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
| **issue** | [Issue](Issue.md) |  | |

### Return type

[**Issue**](Issue.md)

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


## delete8

> delete8(id)



### Example

```ts
import {
  Configuration,
  IssueControllerApi,
} from '';
import type { Delete8Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete8Request;

  try {
    const data = await api.delete8(body);
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


## getAll8

> Array&lt;Issue&gt; getAll8()



### Example

```ts
import {
  Configuration,
  IssueControllerApi,
} from '';
import type { GetAll8Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueControllerApi();

  try {
    const data = await api.getAll8();
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

[**Array&lt;Issue&gt;**](Issue.md)

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


## getById8

> Issue getById8(id)



### Example

```ts
import {
  Configuration,
  IssueControllerApi,
} from '';
import type { GetById8Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById8Request;

  try {
    const data = await api.getById8(body);
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

[**Issue**](Issue.md)

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


## update8

> Issue update8(id, issue)



### Example

```ts
import {
  Configuration,
  IssueControllerApi,
} from '';
import type { Update8Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueControllerApi();

  const body = {
    // number
    id: 789,
    // Issue
    issue: ...,
  } satisfies Update8Request;

  try {
    const data = await api.update8(body);
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
| **issue** | [Issue](Issue.md) |  | |

### Return type

[**Issue**](Issue.md)

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

