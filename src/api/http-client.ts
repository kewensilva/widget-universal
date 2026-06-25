export type HttpResponse<T> = {
  data: T;
  status: number;
};


export const httpClient = async <T>(
  url: string,
  options?: RequestInit
): Promise<HttpResponse<T>> => {


  const response =
    await fetch(
      url,
      {
        headers: {
          "Content-Type":
            "application/json",

          ...options?.headers
        },

        ...options
      }
    );


  const data =
    await response.json();


  return {
    data,
    status:
      response.status
  };

};