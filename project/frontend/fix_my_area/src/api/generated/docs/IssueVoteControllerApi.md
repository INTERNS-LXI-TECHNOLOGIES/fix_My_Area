# IssueVoteControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create6**](IssueVoteControllerApi.md#create6) | **POST** /api/issuevotes |  |
| [**delete6**](IssueVoteControllerApi.md#delete6) | **DELETE** /api/issuevotes/{id} |  |
| [**getAll6**](IssueVoteControllerApi.md#getall6) | **GET** /api/issuevotes |  |
| [**getById6**](IssueVoteControllerApi.md#getbyid6) | **GET** /api/issuevotes/{id} |  |
| [**update6**](IssueVoteControllerApi.md#update6) | **PUT** /api/issuevotes/{id} |  |



## create6

> IssueVote create6(issueVote)



### Example

```ts
import {
  Configuration,
  IssueVoteControllerApi,
} from '';
import type { Create6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueVoteControllerApi();

  const body = {
    // IssueVote
    issueVote: ...,
  } satisfies Create6Request;

  try {
    const data = await api.create6(body);
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
| **issueVote** | [IssueVote](IssueVote.md) |  | |

### Return type

[**IssueVote**](IssueVote.md)

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


## delete6

> delete6(id)



### Example

```ts
import {
  Configuration,
  IssueVoteControllerApi,
} from '';
import type { Delete6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueVoteControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete6Request;

  try {
    const data = await api.delete6(body);
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


## getAll6

> Array&lt;IssueVote&gt; getAll6()



### Example

```ts
import {
  Configuration,
  IssueVoteControllerApi,
} from '';
import type { GetAll6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueVoteControllerApi();

  try {
    const data = await api.getAll6();
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

[**Array&lt;IssueVote&gt;**](IssueVote.md)

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


## getById6

> IssueVote getById6(id)



### Example

```ts
import {
  Configuration,
  IssueVoteControllerApi,
} from '';
import type { GetById6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueVoteControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById6Request;

  try {
    const data = await api.getById6(body);
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

[**IssueVote**](IssueVote.md)

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


## update6

> IssueVote update6(id, issueVote)



### Example

```ts
import {
  Configuration,
  IssueVoteControllerApi,
} from '';
import type { Update6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueVoteControllerApi();

  const body = {
    // number
    id: 789,
    // IssueVote
    issueVote: ...,
  } satisfies Update6Request;

  try {
    const data = await api.update6(body);
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
| **issueVote** | [IssueVote](IssueVote.md) |  | |

### Return type

[**IssueVote**](IssueVote.md)

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

