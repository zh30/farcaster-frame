import { useAccount, useConnect } from 'wagmi'
import { Profile } from '~/components/profile'

export function Welcome() {
  const { isConnected, address } = useAccount()
  const { connect, connectors } = useConnect()

  if (isConnected) {
    return (
      <Profile />
    )
  }

  return (
    <button
      type="button"
      onClick={() => connect({ connector: connectors[1] })}
    >
      Connect
    </button>
  )
}