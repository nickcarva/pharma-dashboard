import Image from 'next/image'

const Header = () => {
  return (
    <header className="h-24 bg-white flex justify-between">
      <div className="px-14 h-full flex items-center space-x-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/default-placeholder.png"
            width={60}
            height={60}
            alt="Company-Logo"
          />
        </div>

        <div>
          <h2>Company</h2>
        </div>
      </div>

      <div className="px-14 h-full flex items-center">
        <Image
          className="rounded-full"
          src="/images/default-user.png"
          width={55}
          height={55}
          alt="User-Avatar"
        />
      </div>
    </header>
  )
}

export default Header
