# IssueCategoryControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create10**](IssueCategoryControllerApi.md#create10) | **POST** /api/issuecategorys |  |
| [**delete10**](IssueCategoryControllerApi.md#delete10) | **DELETE** /api/issuecategorys/{id} |  |
| [**getAll10**](IssueCategoryControllerApi.md#getall10) | **GET** /api/issuecategorys |  |
| [**getById10**](IssueCategoryControllerApi.md#getbyid10) | **GET** /api/issuecategorys/{id} |  |
| [**update10**](IssueCategoryControllerApi.md#update10) | **PUT** /api/issuecategorys/{id} |  |



## create10

> IssueCategory create10(issueCategory)



### Example

```ts
import {
  Configuration,
  IssueCategoryControllerApi,
} from '';
import type { Create10Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCategoryControllerApi();

  const body = {
    // IssueCategory
    issueCategory: ...,
  } satisfies Create10Request;

  try {
    const data = await api.create10(body);
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
| **issueCategory** | [IssueCategory](IssueCategory.md) |  | |

### Return type

[**IssueCategory**](IssueCategory.md)

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


## delete10

> delete10(id)



### Example

```ts
import {
  Configuration,
  IssueCategoryControllerApi,
} from '';
import type { Delete10Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCategoryControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies Delete10Request;

  try {
    const data = await api.delete10(body);
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


## getAll10

> Array&lt;IssueCategory&gt; getAll10()



### Example

```ts
import {
  Configuration,
  IssueCategoryControllerApi,
} from '';
import type { GetAll10Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCategoryControllerApi();

  try {
    const data = await api.getAll10();
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

[**Array&lt;IssueCategory&gt;**](IssueCategory.md)

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


## getById10

> IssueCategory getById10(id)



### Example

```ts
import {
  Configuration,
  IssueCategoryControllerApi,
} from '';
import type { GetById10Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCategoryControllerApi();

  const body = {
    // number
    id: 789,
  } satisfies GetById10Request;

  try {
    const data = await api.getById10(body);
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

[**IssueCategory**](IssueCategory.md)

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


## update10

> IssueCategory update10(id, issueCategory)



### Example

```ts
import {
  Configuration,
  IssueCategoryControllerApi,
} from '';
import type { Update10Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IssueCategoryControllerApi();

  const body = {
    // number
    id: 789,
    // IssueCategory
    issueCategory: ...,
  } satisfies Update10Request;

  try {
    const data = await api.update10(body);
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
| **issueCategory** | [IssueCategory](IssueCategory.md) |  | |

### Return type

[**IssueCategory**](IssueCategory.md)

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

