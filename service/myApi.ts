/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Serverless API
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  products = {
    /**
     * No description
     *
     * @tags product
     * @name ProductsPartialUpdate
     * @request PATCH:/products/{id}
     * @secure
     */
    productsPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        title?: string;
        description?: string;
        typeId?: string;
        type?: object;
        colorId?: string;
        color?: object;
        price?: number;
        ratingsId?: string;
        ratings?: object;
        promotion?: number;
        image?: string;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          title?: string;
          description?: string;
          typeId?: string;
          type?: object;
          colorId?: string;
          color?: object;
          price?: number;
          ratingsId?: string;
          ratings?: object;
          promotion?: number;
          image?: string;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/products/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product
     * @name ProductsDelete
     * @request DELETE:/products/{id}
     * @secure
     */
    productsDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          title?: string;
          description?: string;
          typeId?: string;
          type?: object;
          colorId?: string;
          color?: object;
          price?: number;
          ratingsId?: string;
          ratings?: object;
          promotion?: number;
          image?: string;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/products/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product
     * @name ProductsDetail
     * @request GET:/products/{id}
     * @secure
     */
    productsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          title?: string;
          description?: string;
          typeId?: string;
          type?: object;
          colorId?: string;
          color?: object;
          price?: number;
          ratingsId?: string;
          ratings?: object;
          promotion?: number;
          image?: string;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product
     * @name ProductsList
     * @request GET:/products
     * @secure
     */
    productsList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","title":"asc","description":"asc","type":"asc","color":"asc","price":"asc","ratings":"asc","promotion":"asc","image":"asc","orders":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          title?: "asc" | "desc";
          description?: "asc" | "desc";
          type?: "asc" | "desc";
          color?: "asc" | "desc";
          price?: "asc" | "desc";
          ratings?: "asc" | "desc";
          promotion?: "asc" | "desc";
          image?: "asc" | "desc";
          orders?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            title?: string;
            description?: string;
            typeId?: string;
            type?: object;
            colorId?: string;
            color?: object;
            price?: number;
            ratingsId?: string;
            ratings?: object;
            promotion?: number;
            image?: string;
            ordersId?: string;
            orders?: object;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product
     * @name FileExcelList
     * @request GET:/products/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","title":"asc","description":"asc","type":"asc","color":"asc","price":"asc","ratings":"asc","promotion":"asc","image":"asc","orders":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            title?: "asc" | "desc";
            description?: "asc" | "desc";
            type?: "asc" | "desc";
            color?: "asc" | "desc";
            price?: "asc" | "desc";
            ratings?: "asc" | "desc";
            promotion?: "asc" | "desc";
            image?: "asc" | "desc";
            orders?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/products/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product
     * @name SoftDeletePartialUpdate
     * @request PATCH:/products/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        title?: string;
        description?: string;
        typeId?: string;
        type?: object;
        colorId?: string;
        color?: object;
        price?: number;
        ratingsId?: string;
        ratings?: object;
        promotion?: number;
        image?: string;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          title?: string;
          description?: string;
          typeId?: string;
          type?: object;
          colorId?: string;
          color?: object;
          price?: number;
          ratingsId?: string;
          ratings?: object;
          promotion?: number;
          image?: string;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/products/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags product
     * @name ProductCreate
     * @request POST:/product
     * @secure
     */
    productCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        title?: string;
        description?: string;
        typeId?: string;
        type?: object;
        colorId?: string;
        color?: object;
        price?: number;
        ratingsId?: string;
        ratings?: object;
        promotion?: number;
        image?: string;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          title?: string;
          description?: string;
          typeId?: string;
          type?: object;
          colorId?: string;
          color?: object;
          price?: number;
          ratingsId?: string;
          ratings?: object;
          promotion?: number;
          image?: string;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  colors = {
    /**
     * No description
     *
     * @tags color
     * @name ColorsPartialUpdate
     * @request PATCH:/colors/{id}
     * @secure
     */
    colorsPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        hexa?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          hexa?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/colors/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags color
     * @name ColorsDelete
     * @request DELETE:/colors/{id}
     * @secure
     */
    colorsDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          hexa?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/colors/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags color
     * @name ColorsDetail
     * @request GET:/colors/{id}
     * @secure
     */
    colorsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          hexa?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/colors/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags color
     * @name ColorsList
     * @request GET:/colors
     * @secure
     */
    colorsList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","name":"asc","hexa":"asc","products":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          name?: "asc" | "desc";
          hexa?: "asc" | "desc";
          products?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            name?: string;
            hexa?: string;
            productsId?: string;
            products?: object;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/colors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags color
     * @name FileExcelList
     * @request GET:/colors/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","name":"asc","hexa":"asc","products":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            name?: "asc" | "desc";
            hexa?: "asc" | "desc";
            products?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/colors/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags color
     * @name SoftDeletePartialUpdate
     * @request PATCH:/colors/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        hexa?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          hexa?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/colors/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  color = {
    /**
     * No description
     *
     * @tags color
     * @name ColorCreate
     * @request POST:/color
     * @secure
     */
    colorCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        hexa?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          hexa?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/color`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  types = {
    /**
     * No description
     *
     * @tags type
     * @name TypesPartialUpdate
     * @request PATCH:/types/{id}
     * @secure
     */
    typesPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/types/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags type
     * @name TypesDelete
     * @request DELETE:/types/{id}
     * @secure
     */
    typesDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/types/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags type
     * @name TypesDetail
     * @request GET:/types/{id}
     * @secure
     */
    typesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags type
     * @name TypesList
     * @request GET:/types
     * @secure
     */
    typesList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","name":"asc","products":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          name?: "asc" | "desc";
          products?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            name?: string;
            productsId?: string;
            products?: object;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags type
     * @name FileExcelList
     * @request GET:/types/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","name":"asc","products":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            name?: "asc" | "desc";
            products?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/types/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags type
     * @name SoftDeletePartialUpdate
     * @request PATCH:/types/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/types/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  type = {
    /**
     * No description
     *
     * @tags type
     * @name TypeCreate
     * @request POST:/type
     * @secure
     */
    typeCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        name?: string;
        productsId?: string;
        products?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          name?: string;
          productsId?: string;
          products?: object;
        },
        any
      >({
        path: `/type`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ratings = {
    /**
     * No description
     *
     * @tags rating
     * @name RatingsPartialUpdate
     * @request PATCH:/ratings/{id}
     * @secure
     */
    ratingsPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        productId?: string;
        product?: object;
        value?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          productId?: string;
          product?: object;
          value?: number;
        },
        any
      >({
        path: `/ratings/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rating
     * @name RatingsDelete
     * @request DELETE:/ratings/{id}
     * @secure
     */
    ratingsDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          productId?: string;
          product?: object;
          value?: number;
        },
        any
      >({
        path: `/ratings/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rating
     * @name RatingsDetail
     * @request GET:/ratings/{id}
     * @secure
     */
    ratingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          productId?: string;
          product?: object;
          value?: number;
        },
        any
      >({
        path: `/ratings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rating
     * @name RatingsList
     * @request GET:/ratings
     * @secure
     */
    ratingsList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","user":"asc","product":"asc","value":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          user?: "asc" | "desc";
          product?: "asc" | "desc";
          value?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            userId?: string;
            user?: object;
            productId?: string;
            product?: object;
            value?: number;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/ratings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rating
     * @name FileExcelList
     * @request GET:/ratings/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","user":"asc","product":"asc","value":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            user?: "asc" | "desc";
            product?: "asc" | "desc";
            value?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/ratings/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rating
     * @name SoftDeletePartialUpdate
     * @request PATCH:/ratings/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        productId?: string;
        product?: object;
        value?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          productId?: string;
          product?: object;
          value?: number;
        },
        any
      >({
        path: `/ratings/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rating = {
    /**
     * No description
     *
     * @tags rating
     * @name RatingCreate
     * @request POST:/rating
     * @secure
     */
    ratingCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        productId?: string;
        product?: object;
        value?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          productId?: string;
          product?: object;
          value?: number;
        },
        any
      >({
        path: `/rating`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags notification
     * @name NotificationsPartialUpdate
     * @request PATCH:/notifications/{id}
     * @secure
     */
    notificationsPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        typeNotification?: string;
        userId?: string;
        user?: object;
        value?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          typeNotification?: string;
          userId?: string;
          user?: object;
          value?: string;
        },
        any
      >({
        path: `/notifications/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotificationsDelete
     * @request DELETE:/notifications/{id}
     * @secure
     */
    notificationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          typeNotification?: string;
          userId?: string;
          user?: object;
          value?: string;
        },
        any
      >({
        path: `/notifications/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotificationsDetail
     * @request GET:/notifications/{id}
     * @secure
     */
    notificationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          typeNotification?: string;
          userId?: string;
          user?: object;
          value?: string;
        },
        any
      >({
        path: `/notifications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name NotificationsList
     * @request GET:/notifications
     * @secure
     */
    notificationsList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","typeNotification":"asc","user":"asc","value":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          typeNotification?: "asc" | "desc";
          user?: "asc" | "desc";
          value?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            typeNotification?: string;
            userId?: string;
            user?: object;
            value?: string;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/notifications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name FileExcelList
     * @request GET:/notifications/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","typeNotification":"asc","user":"asc","value":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            typeNotification?: "asc" | "desc";
            user?: "asc" | "desc";
            value?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/notifications/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification
     * @name SoftDeletePartialUpdate
     * @request PATCH:/notifications/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        typeNotification?: string;
        userId?: string;
        user?: object;
        value?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          typeNotification?: string;
          userId?: string;
          user?: object;
          value?: string;
        },
        any
      >({
        path: `/notifications/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  notification = {
    /**
     * No description
     *
     * @tags notification
     * @name NotificationCreate
     * @request POST:/notification
     * @secure
     */
    notificationCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        typeNotification?: string;
        userId?: string;
        user?: object;
        value?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          typeNotification?: string;
          userId?: string;
          user?: object;
          value?: string;
        },
        any
      >({
        path: `/notification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags order
     * @name OrdersPartialUpdate
     * @request PATCH:/orders/{id}
     * @secure
     */
    ordersPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        productId?: string;
        product?: object;
        price?: number;
        factureId?: string;
        facture?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          productId?: string;
          product?: object;
          price?: number;
          factureId?: string;
          facture?: object;
        },
        any
      >({
        path: `/orders/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrdersDelete
     * @request DELETE:/orders/{id}
     * @secure
     */
    ordersDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          productId?: string;
          product?: object;
          price?: number;
          factureId?: string;
          facture?: object;
        },
        any
      >({
        path: `/orders/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrdersDetail
     * @request GET:/orders/{id}
     * @secure
     */
    ordersDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          productId?: string;
          product?: object;
          price?: number;
          factureId?: string;
          facture?: object;
        },
        any
      >({
        path: `/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrdersList
     * @request GET:/orders
     * @secure
     */
    ordersList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","product":"asc","price":"asc","facture":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          product?: "asc" | "desc";
          price?: "asc" | "desc";
          facture?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            productId?: string;
            product?: object;
            price?: number;
            factureId?: string;
            facture?: object;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name FileExcelList
     * @request GET:/orders/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","product":"asc","price":"asc","facture":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            product?: "asc" | "desc";
            price?: "asc" | "desc";
            facture?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/orders/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name SoftDeletePartialUpdate
     * @request PATCH:/orders/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        productId?: string;
        product?: object;
        price?: number;
        factureId?: string;
        facture?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          productId?: string;
          product?: object;
          price?: number;
          factureId?: string;
          facture?: object;
        },
        any
      >({
        path: `/orders/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  order = {
    /**
     * No description
     *
     * @tags order
     * @name OrderCreate
     * @request POST:/order
     * @secure
     */
    orderCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        productId?: string;
        product?: object;
        price?: number;
        factureId?: string;
        facture?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          productId?: string;
          product?: object;
          price?: number;
          factureId?: string;
          facture?: object;
        },
        any
      >({
        path: `/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  factures = {
    /**
     * No description
     *
     * @tags facture
     * @name FacturesPartialUpdate
     * @request PATCH:/factures/{id}
     * @secure
     */
    facturesPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/factures/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags facture
     * @name FacturesDelete
     * @request DELETE:/factures/{id}
     * @secure
     */
    facturesDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/factures/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags facture
     * @name FacturesDetail
     * @request GET:/factures/{id}
     * @secure
     */
    facturesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/factures/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags facture
     * @name FacturesList
     * @request GET:/factures
     * @secure
     */
    facturesList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","user":"asc","orders":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          user?: "asc" | "desc";
          orders?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            userId?: string;
            user?: object;
            ordersId?: string;
            orders?: object;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/factures`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags facture
     * @name FileExcelList
     * @request GET:/factures/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","user":"asc","orders":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            user?: "asc" | "desc";
            orders?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/factures/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags facture
     * @name SoftDeletePartialUpdate
     * @request PATCH:/factures/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/factures/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  facture = {
    /**
     * No description
     *
     * @tags facture
     * @name FactureCreate
     * @request POST:/facture
     * @secure
     */
    factureCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        userId?: string;
        user?: object;
        ordersId?: string;
        orders?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          userId?: string;
          user?: object;
          ordersId?: string;
          orders?: object;
        },
        any
      >({
        path: `/facture`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  appconfigs = {
    /**
     * No description
     *
     * @tags appconfig
     * @name AppconfigsPartialUpdate
     * @request PATCH:/appconfigs/{id}
     * @secure
     */
    appconfigsPartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        value?: string;
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          value?: string;
          key?: string;
        },
        any
      >({
        path: `/appconfigs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name AppconfigsDelete
     * @request DELETE:/appconfigs/{id}
     * @secure
     */
    appconfigsDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          value?: string;
          key?: string;
        },
        any
      >({
        path: `/appconfigs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name AppconfigsDetail
     * @request GET:/appconfigs/{id}
     * @secure
     */
    appconfigsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          value?: string;
          key?: string;
        },
        any
      >({
        path: `/appconfigs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name AppconfigsList
     * @request GET:/appconfigs
     * @secure
     */
    appconfigsList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            OR?: {
              id: string;
            }[];
            NOT?:
              | {
                  id: string;
                }
              | {
                  id: string;
                }[];
            id: string;
          };
        };
        /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","value":"asc","key":"asc"} */
        orderBy?: {
          id?: "asc" | "desc";
          createdAt?: "asc" | "desc";
          updatedAt?: "asc" | "desc";
          deletedAt?: "asc" | "desc";
          value?: "asc" | "desc";
          key?: "asc" | "desc";
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            value?: string;
            key?: string;
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/appconfigs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name FileExcelList
     * @request GET:/appconfigs/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          where?: {
            where: {
              AND?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              OR?: {
                id: string;
              }[];
              NOT?:
                | {
                    id: string;
                  }
                | {
                    id: string;
                  }[];
              id: string;
            };
          };
          /** @example {"id":"asc","createdAt":"asc","updatedAt":"asc","deletedAt":"asc","value":"asc","key":"asc"} */
          orderBy?: {
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            value?: "asc" | "desc";
            key?: "asc" | "desc";
          };
          /** @example "0" */
          skip?: string;
          /** @example "10" */
          take?: string;
        },
        any
      >({
        path: `/appconfigs/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name SoftDeletePartialUpdate
     * @request PATCH:/appconfigs/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        value?: string;
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          value?: string;
          key?: string;
        },
        any
      >({
        path: `/appconfigs/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  appconfig = {
    /**
     * No description
     *
     * @tags appconfig
     * @name AppconfigCreate
     * @request POST:/appconfig
     * @secure
     */
    appconfigCreate: (
      data: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        value?: string;
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          value?: string;
          key?: string;
        },
        any
      >({
        path: `/appconfig`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags user
     * @name UsersPartialUpdate
     * @request PATCH:/users/{id}
     * @secure
     */
    usersPartialUpdate: (
      id: string,
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username?: string;
        isValid?: boolean;
        roles?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UsersDelete
     * @request DELETE:/users/{id}
     * @secure
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UsersDetail
     * @request GET:/users/{id}
     * @secure
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UsersList
     * @request GET:/users
     * @secure
     */
    usersList: (
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }[];
            OR?: {
              id: string;
              firstName?: string;
              lastName?: string;
              username?: string;
            }[];
            NOT?:
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }[];
            id: string;
            firstName?: string;
            lastName?: string;
            username?: string;
          };
        };
        orderBy?: {
          /** @example {"password":"asc","id":"desc","createdAt":"asc","updatedAt":"desc","deletedAt":"asc","firstName":"asc","lastName":"desc","username":"asc","isValid":"desc","roles":"asc"} */
          orderBy?: {
            password?: "asc" | "desc";
            id?: "asc" | "desc";
            createdAt?: "asc" | "desc";
            updatedAt?: "asc" | "desc";
            deletedAt?: "asc" | "desc";
            firstName?: "asc" | "desc";
            lastName?: "asc" | "desc";
            username?: "asc" | "desc";
            isValid?: "asc" | "desc";
            roles?: "asc" | "desc";
          };
        };
        /** @example "0" */
        skip?: string;
        /** @example "10" */
        take?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            password?: string;
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            firstName?: string;
            lastName?: string;
            username: string;
            isValid?: boolean;
            roles: string[];
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name FileExcelList
     * @request GET:/users/fileExcel
     * @secure
     */
    fileExcelList: (params: RequestParams = {}) =>
      this.request<
        {
          file: string;
        },
        any
      >({
        path: `/users/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appconfig
     * @name SoftDeletePartialUpdate
     * @request PATCH:/users/softDelete/{id}
     * @secure
     */
    softDeletePartialUpdate: (
      id: string,
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username?: string;
        isValid?: boolean;
        roles?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/users/softDelete/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserCreate
     * @request POST:/user
     * @secure
     */
    userCreate: (
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username: string;
        isValid?: boolean;
        roles: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  createMany = {
    /**
     * No description
     *
     * @tags user
     * @name CreateManyCreate
     * @request POST:/createMany
     * @secure
     */
    createManyCreate: (
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username: string;
        isValid?: boolean;
        roles: string[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  updateMany = {
    /**
     * No description
     *
     * @tags user
     * @name UpdateManyPartialUpdate
     * @request PATCH:/updateMany
     * @secure
     */
    updateManyPartialUpdate: (
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username?: string;
        isValid?: boolean;
        roles?: string[];
      },
      query?: {
        where?: {
          where: {
            AND?:
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }[];
            OR?: {
              id: string;
              firstName?: string;
              lastName?: string;
              username?: string;
            }[];
            NOT?:
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }
              | {
                  id: string;
                  firstName?: string;
                  lastName?: string;
                  username?: string;
                }[];
            id: string;
            firstName?: string;
            lastName?: string;
            username?: string;
          };
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count?: number;
        },
        any
      >({
        path: `/updateMany`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  signUp = {
    /**
     * No description
     *
     * @tags auth
     * @name SignUpCreate
     * @request POST:/sign_up
     * @secure
     */
    signUpCreate: (
      data: {
        username: string;
        firstName: string;
        lastName: string;
        password: string;
        role: string;
        rememberMe: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          firstName: string | null;
          lastName: string | null;
          username: string;
          roles: string[];
          accessToken?: string | null;
        },
        any
      >({
        path: `/sign_up`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags auth
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (
      data: {
        email: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          paginatedResult: {
            password?: string;
            id: string;
            createdAt?: string;
            updatedAt?: string;
            deletedAt?: string;
            firstName?: string;
            lastName?: string;
            username: string;
            isValid?: boolean;
            roles: string[];
          }[];
          totalCount: number;
        },
        any
      >({
        path: `/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resetPasswordWithEmail = {
    /**
     * No description
     *
     * @tags auth
     * @name ResetPasswordWithEmailCreate
     * @request POST:/reset_password_with_email
     * @secure
     */
    resetPasswordWithEmailCreate: (
      data: {
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/reset_password_with_email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getUserByToken = {
    /**
     * No description
     *
     * @tags auth
     * @name GetUserByTokenCreate
     * @request POST:/get_user_by_token
     * @secure
     */
    getUserByTokenCreate: (
      data: {
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/get_user_by_token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  inviteUser = {
    /**
     * No description
     *
     * @tags auth
     * @name InviteUserCreate
     * @request POST:/invite_user
     * @secure
     */
    inviteUserCreate: (
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username: string;
        isValid?: boolean;
        roles: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        },
        any
      >({
        path: `/invite_user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  inviteManyUsers = {
    /**
     * No description
     *
     * @tags auth
     * @name InviteManyUsersCreate
     * @request POST:/invite_many_users
     * @secure
     */
    inviteManyUsersCreate: (
      data: {
        password?: string;
        id: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
        firstName?: string;
        lastName?: string;
        username: string;
        isValid?: boolean;
        roles: string[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        {
          password?: string;
          id: string;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string;
          firstName?: string;
          lastName?: string;
          username: string;
          isValid?: boolean;
          roles: string[];
        }[],
        any
      >({
        path: `/invite_many_users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resetPassword = {
    /**
     * No description
     *
     * @tags auth
     * @name ResetPasswordCreate
     * @request POST:/reset_password
     * @secure
     */
    resetPasswordCreate: (
      data: {
        newPassword: string;
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/reset_password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
