export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-4xl font-bold mb-8'>
        Welcome to TonsConnect
      </h1>
      <p className='text-xl text-gray-600 mb-8'>
        A social platform for the TON ecosystem
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Connect</h2>
          <p className='text-gray-600'>Connect with other TON enthusiasts</p>
        </div>
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Share</h2>
          <p className='text-gray-600'>Share your thoughts and ideas</p>
        </div>
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Discover</h2>
          <p className='text-gray-600'>Discover new opportunities</p>
        </div>
      </div>
    </div>
  );
}
