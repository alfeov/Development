import { cn } from '@/shared/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'

interface CongratulationsProps {
  children: React.ReactNode
  className?: string
}

export function Congratulations({ children, className }: CongratulationsProps) {
  return (
    <Card className={cn('w-full max-w-xl', className)}>
      <CardHeader>
        <CardTitle>Congratulations!!!</CardTitle>
        <CardDescription>You have been authorized</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-center'>&#127879;</p>
        <p className='text-center'>&#127879;&emsp;&#127879;</p>
        <p className='text-center'>&#127879;&emsp;&#127879;&emsp;&#127879;</p>
        <p className='text-center'>&#127879;&emsp;&#127879;</p>
        <p className='text-center'>&#127879;</p>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  )
}
