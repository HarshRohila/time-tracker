import { Observable, takeUntil } from "rxjs"

export function untilDestroy(until$: Observable<unknown>) {
  return {
    subscribe(stream: Observable<T>) {
      return stream.pipe(takeUntil(until$)).subscribe()
    },
    stream(stream: Observable<T>) {
      return stream.pipe(takeUntil(until$))
    },
  }
}
