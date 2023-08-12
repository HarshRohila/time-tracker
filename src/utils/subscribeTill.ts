import { Observable, takeUntil } from "rxjs"

export function untilDestroy(until$: Observable<unknown>) {
  return {
    subscribe<T>(stream: Observable<T>) {
      return stream.pipe(takeUntil(until$)).subscribe()
    },
    stream<T>(stream: Observable<T>) {
      return stream.pipe(takeUntil(until$))
    },
  }
}
