/** Takes a promise and returns a tuple with the data or error. */
export async function catchPromiseError<E extends Error, T = unknown>(
  promise: Promise<T>
) {
  return promise
    .then<[T, null]>((data) => [data, null])
    .catch<[null, E]>((error) => [null, error]);
}
