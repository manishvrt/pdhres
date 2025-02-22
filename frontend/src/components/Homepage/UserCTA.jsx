import React from 'react'
import Button from '../Reusables/Button'
const UserCTA = () => {
  return (
    <div>
      <section className=" px-6 pt-10 ">
    <div className=" mx-auto overflow-hidden rounded-[40px] bg-[#ff0000]  ">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight gsans text-white  lg:text-6xl">Use mobile app for better performance</h2>
                    <p className="mt-4 text-base small text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                    <Button
                      text="Let's get the Survey done!"
                      className="w-fit text-[#ff0000] font-semibold text-xs lg:text-[16px] small tracking-wide bg-[#ffffff] h-14 px-6"
                    />
                    </div>
                </div>

                <div className="relative px-12">
                    <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-40 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <img className="relative  mx-auto -mb-60 lg:-mb-64" src="/usercta.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default UserCTA
