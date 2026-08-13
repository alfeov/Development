import { Link, type LinkProps } from 'react-router'

import { buttonVariants } from '@/shared/ui/button'

interface LinkedButtonProps {
  to: LinkProps['to']
  title: string
  configVariants?: Parameters<typeof buttonVariants>[0]
}

export function LinkedButton({ to, title, configVariants }: LinkedButtonProps) {
  return (
    <Link to={to} className={buttonVariants(configVariants)}>
      {title}
    </Link>
  )
}
