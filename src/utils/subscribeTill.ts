import { Observable, takeUntil } from "rxjs"

export function subscribeUntil<T>(stream: Observable<T>, until$: Observable<unknown>) {
  stream.pipe(takeUntil(until$)).subscribe()
}
