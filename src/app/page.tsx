import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col">
      {/* Mobile-first responsive header */}
      <header className="p-4 border-b border-neutral-800">
        <h1 className="text-2xl font-bold text-center sm:text-3xl">
          Marketing Layer
        </h1>
      </header>
      
      {/* Main content - mobile responsive grid */}
      <section className="flex-1 p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
        <div className="bg-neutral-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Create Campaign</h2>
          <p className="text-sm text-neutral-400 mb-4">
            Launch your marketing campaign with token payments
          </p>
          <Link href="/campaigns/new" className="block w-full text-center bg-blue-600 hover:bg-blue-700 py-2 rounded">
            Get Started
          </Link>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Creator Marketplace</h2>
          <p className="text-sm text-neutral-400 mb-4">
            Connect with influencers for your campaigns
          </p>
          <Link href="/creators" className="block w-full text-center bg-green-600 hover:bg-green-700 py-2 rounded">
            Browse Creators
          </Link>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p className="text-sm text-neutral-400 mb-4">
            Track real-time campaign performance
          </p>
          <Link href="/analytics" className="block w-full text-center bg-purple-600 hover:bg-purple-700 py-2 rounded">
            View Dashboard
          </Link>
        </div>
      </section>
      
      {/* Mobile bottom navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-2 flex justify-around">
        <Link href="/" className="text-blue-400">Home</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/wallet">Wallet</Link>
      </nav>
    </main>
  );
}
