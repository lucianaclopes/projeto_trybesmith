export default function mapStatusHttp(status: string):number {
  const statusHttpMap:Record<string, number> = {
    SUCCESS: 201,
    SUCCESSFUL: 200,
    INVALID_DATA: 400, 
    UNAUTHORIZED: 401,
    UNPROCESSABLE_ENTITY: 422,

  };
  return statusHttpMap[status] ?? 500;
}