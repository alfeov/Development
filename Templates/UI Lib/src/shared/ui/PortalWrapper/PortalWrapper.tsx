import { createPortal } from 'react-dom'

interface PortalWrapper {
  children: React.ReactNode
}

export function PortalWrapper({ children }: PortalWrapper) {
  return createPortal(children, document.body)
}
