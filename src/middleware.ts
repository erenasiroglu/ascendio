import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  const publicRoutes = ['/login', '/register', '/forgot-password']
  if (!publicRoutes.includes(request.nextUrl.pathname)) {
  }
}

export const config = {
  matcher: ['/', '/login', '/register', '/forgot-password']
} 