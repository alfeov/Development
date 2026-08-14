import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Next App ',
}

export default function AboutLayout({
  children,
  contacts,
  team,
}: LayoutProps<'/about'>) {
  return (
    <div>
      {children}
      <br />
      <h1>Parallel pages:</h1>
      {contacts}
      {team}
    </div>
  )
}
