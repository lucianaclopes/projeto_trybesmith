export default function mapStatusHttp(status: string):number {
  const statusHttpMap:Record<string, number> = {
    SUCCESS: 201,
    INVALID_DATA: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
  };
  return statusHttpMap[status] ?? 500;
}