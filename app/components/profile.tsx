import { useAccount } from 'wagmi'

export function Profile() {
  const { address, status } = useAccount()

  if (status === 'connecting') return <div>Connecting...</div>
  if (status === 'disconnected') return <div>Not connected</div>
  if (!address) return null

  // Format address for display (0x1234...5678)
  const formattedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`
  
  return <div>Address: {formattedAddress}</div>
}