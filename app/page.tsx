import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Ghost, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const perks = [{
  name: "Instant Delivery",
  Icon: ArrowDownToLine,
  description: "We deliver your product instantly. No need to wait for a day or two. We are here to help you with your order."
},
{
  name: "Guaranteed Quality",
  Icon: CheckCircle,
  description: "Get your product delivered with the highest quality. We guarantee that your product will be delivered as per your order."
},{
  name: "For the planet",
  Icon: Leaf,
  description: "We've pledged to help the planet by providing the best products to the people."
}
]
export default function Home() {
  return (
    <><MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Best Marketplace for {''} <span className='text-gray-600'>Hight-quality Products</span></h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending </Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>
      {/* todo: add a carousel */}
    </MaxWidthWrapper>
    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {perks.map((perk) => (
            <div key={perk.name}className='text-center md:items-start md:text-left lg:block lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-slate-300 texy-slat-900' >
                  {<perk.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt=0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {perk.name}
                </h3>
                <p className='mt-3 text-sm text-muted-foreground'>
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
          </div>

        </MaxWidthWrapper>
      </section></>    
    
  )
}
