import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>
        <Link 
          href="/" 
          className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
