export interface ApiResponse {
  status(code: number): ApiResponse;
  redirect(url: string): void;
}
