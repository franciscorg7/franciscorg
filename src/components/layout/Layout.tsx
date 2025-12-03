import type { LayoutProps } from '../../types/layout'

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
    <main className="flex-1 w-full mx-auto max-w-5xl px-6">{children}</main>
  </div>
)
