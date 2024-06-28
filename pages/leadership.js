import {FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function () {
    return (
        <>
            <div class="flex flex-col items-center justify-top min-h-screen bg-gray-200 px-4 pb-8">
            <h1 class="text-6xl font-bold text-gray-700 mb-8 mt-10">Meet Our Amazing Team!</h1>
            <div class="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 w-full max-w-6xl">
                <div class="w-full overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                    <div class="flex justify-center mt-6">
                        <img class="h-24 w-24 rounded-full" src="Garg.jpeg" alt="Profile"/>
                    </div>
                    <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Pratham Garg</h1>
                    <p class="my-4 text-center text-md text-gray-500">Inspirational Quote</p>
                    <p class="my-4 text-center text-sm text-gray-500">President</p>
                    <div class="space-x-4 bg-gray-100 py-4 text-center">
                        <a className='inline-block rounded-md' href="https://facebook.com" target="_blank"><FaLinkedin /></a>
                        <a className='inline-block rounded-md' href="https://twitter.com" target="_blank"><FaTwitter /></a>
                        <a className='inline-block rounded-md' href="https://instagram.com" target="_blank"><FaInstagram /></a>
                    </div>
                </div>

                <div class="w-full overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                    <div class="flex justify-center mt-6">
                        <img class="h-24 w-24 rounded-full" src="Uppal.jpeg" alt="Profile"/>
                    </div>
                    <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Gurmehak Kaur Uppal</h1>
                    <p class="my-4 text-center text-md text-gray-500">Inspirational Quote</p>
                    <p class="my-4 text-center text-sm text-gray-500">Vice-President</p>
                    <div class="space-x-4 bg-gray-100 py-4 text-center">
                        <a className='inline-block rounded-md' href="https://facebook.com" target="_blank"><FaLinkedin /></a>
                        <a className='inline-block rounded-md' href="https://twitter.com" target="_blank"><FaTwitter /></a>
                        <a className='inline-block rounded-md' href="https://instagram.com" target="_blank"><FaInstagram /></a>
                    </div>
                </div>

                <div class="w-full overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                    <div class="flex justify-center mt-6">
                        <img class="h-24 w-24 rounded-full" src="user.jpg" alt="Profile"/>
                    </div>
                    <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Saeed Bafana</h1>
                    <p class="my-4 text-center text-md text-gray-500">Inspirational Quote</p>
                    <p class="my-4 text-center text-sm text-gray-500">Treasurer</p>
                    <div class="space-x-4 bg-gray-100 py-4 text-center">

                        <Link legacyBehavior href="https://facebook.com"><a className='inline-block rounded-md' target="_blank"><FaLinkedin /></a></Link>
                        <Link legacyBehavior href="https://twitter.com"><a className='inline-block rounded-md' target="_blank"><FaTwitter /></a></Link>
                        <Link legacyBehavior href="https://instagram.com"><a className='inline-block rounded-md' target="_blank"><FaInstagram /></a></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}