# IssueCommentControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create9**](IssueCommentControllerApi.md#create9) | **POST** /api/issuecomments |  |
| [**delete9**](IssueCommentControllerApi.md#delete9) | **DELETE** /api/issuecomments/{id} |  |
| [**getAll9**](IssueCommentControllerApi.md#getall9) | **GET** /api/issuecomments |  |
| [**getById9**](IssueCommentControllerApi.md#getbyid9) | **GET** /api/issuecomments/{id} |  |
| [**update9**](IssueCommentControllerApi.md#update9) | **PUT** /api/issuecomments/{id} |  |



## create9

> IssueComment create9(issueComment)



### Example

```ts
import {
  Configuration,
  IssueCommentControllerApi,
} from '';
import type { Create9Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCommentControllerApi();

  const body = {
    // IssueComment
    issueComment: ...,
  } satisfies Create9Request;

  try {
    const data = await api.create9(body);
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
| **issueComment** | [IssueComment](IssueComment.md) |  | |

### Return type

[**IssueComment**](IssueComment.md)

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


## delete9

> delete9(id)



### Example

```ts
import {
  Configuration,
  IssueCommentControllerApi,
} from '';
import type { Delete9Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCommentControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete9Request;

  try {
    const data = await api.delete9(body);
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


## getAll9

> Array&lt;IssueComment&gt; getAll9()



### Example

```ts
import {
  Configuration,
  IssueCommentControllerApi,
} from '';
import type { GetAll9Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCommentControllerApi();

  try {
    const data = await api.getAll9();
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

[**Array&lt;IssueComment&gt;**](IssueComment.md)

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


## getById9

> IssueComment getById9(id)



### Example

```ts
import {
  Configuration,
  IssueCommentControllerApi,
} from '';
import type { GetById9Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCommentControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById9Request;

  try {
    const data = await api.getById9(body);
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

[**IssueComment**](IssueComment.md)

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


## update9

> IssueComment update9(id, issueComment)



### Example

```ts
import {
  Configuration,
  IssueCommentControllerApi,
} from '';
import type { Update9Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCommentControllerApi();

  const body = {
    // number
    id: 789,
    // IssueComment
    issueComment: ...,
  } satisfies Update9Request;

  try {
    const data = await api.update9(body);
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
| **issueComment** | [IssueComment](IssueComment.md) |  | |

### Return type

[**IssueComment**](IssueComment.md)

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

