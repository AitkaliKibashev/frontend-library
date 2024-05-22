import { ccn } from '../utils/index.js'

export const LoadingSpinner = () => {
  return (
    <div
      className={ccn(
        'size-6',
        'border-4',
        'rounded-full',
        'border-x-borderDefault',
        'border-t-borderDefault',
        'border-b-transparent',
        'animate-spin',
      )}
    />
  )
}
