# IssueStatusHistoryControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create7**](IssueStatusHistoryControllerApi.md#create7) | **POST** /api/issuestatushistorys |  |
| [**delete7**](IssueStatusHistoryControllerApi.md#delete7) | **DELETE** /api/issuestatushistorys/{id} |  |
| [**getAll7**](IssueStatusHistoryControllerApi.md#getall7) | **GET** /api/issuestatushistorys |  |
| [**getById7**](IssueStatusHistoryControllerApi.md#getbyid7) | **GET** /api/issuestatushistorys/{id} |  |
| [**update7**](IssueStatusHistoryControllerApi.md#update7) | **PUT** /api/issuestatushistorys/{id} |  |



## create7

> IssueStatusHistory create7(issueStatusHistory)



### Example

```ts
import {
  Configuration,
  IssueStatusHistoryControllerApi,
} from '';
import type { Create7Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueStatusHistoryControllerApi();

  const body = {
    // IssueStatusHistory
    issueStatusHistory: ...,
  } satisfies Create7Request;

  try {
    const data = await api.create7(body);
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
| **issueStatusHistory** | [IssueStatusHistory](IssueStatusHistory.md) |  | |

### Return type

[**IssueStatusHistory**](IssueStatusHistory.md)

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


## delete7

> delete7(id)



### Example

```ts
import {
  Configuration,
  IssueStatusHistoryControllerApi,
} from '';
import type { Delete7Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueStatusHistoryControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete7Request;

  try {
    const data = await api.delete7(body);
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


## getAll7

> Array&lt;IssueStatusHistory&gt; getAll7()



### Example

```ts
import {
  Configuration,
  IssueStatusHistoryControllerApi,
} from '';
import type { GetAll7Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueStatusHistoryControllerApi();

  try {
    const data = await api.getAll7();
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

[**Array&lt;IssueStatusHistory&gt;**](IssueStatusHistory.md)

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


## getById7

> IssueStatusHistory getById7(id)



### Example

```ts
import {
  Configuration,
  IssueStatusHistoryControllerApi,
} from '';
import type { GetById7Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueStatusHistoryControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById7Request;

  try {
    const data = await api.getById7(body);
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

[**IssueStatusHistory**](IssueStatusHistory.md)

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


## update7

> IssueStatusHistory update7(id, issueStatusHistory)



### Example

```ts
import {
  Configuration,
  IssueStatusHistoryControllerApi,
} from '';
import type { Update7Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueStatusHistoryControllerApi();

  const body = {
    // number
    id: 789,
    // IssueStatusHistory
    issueStatusHistory: ...,
  } satisfies Update7Request;

  try {
    const data = await api.update7(body);
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
| **issueStatusHistory** | [IssueStatusHistory](IssueStatusHistory.md) |  | |

### Return type

[**IssueStatusHistory**](IssueStatusHistory.md)

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

