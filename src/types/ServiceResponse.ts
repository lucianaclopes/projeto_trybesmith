type ServiceResponseErrorType = 'INVALID_DATA' | 'UNPROCESSABLE' | 'UNAUTHORIZED';
export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: { message: string };
};
export type ServiceResponseSuccess<T> = {
  status: 'SUCCESS' | 'SUCCESSFUL';
  data: T;
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;
