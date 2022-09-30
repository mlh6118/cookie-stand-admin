import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="p-4 mt-8 bg-emerald-500 test-gray-50">
        Cookie Stand Admin
      </header>

      <main>
          <div className="flex justify-center bg-emerald-50">
        <form className="bg-emerald-300 rounded-xl w-8/12 my-8">
            <div className="flex mb-8 justify-center">
                Create Cookie Stand
            </div>
            <div className="flex ml-4 mb-8 justify-center">
                Location<input name="Location" className="w-full ml-4 mr-4 bg-sky-100" />
            </div>
            <div className="flex space-x-2 mb-4 text-sm font-medium justify-center">
                <div className="flex space-x-4">
                    <div
                        className="px-6 h-12 font-normal tracking-narrow bg-emerald-300 text-black">
                        <p>Minimum Customers per Hour</p>
                        <input name="Minimum" />
                    </div>
                    <div
                        className="px-6 h-12 font-normal tracking-narrow bg-emerald-300 text-black">
                        <p>Maximum Customers per Hour</p>
                        <input name="Maximum" />
                    </div>
                    <div
                        className="px-6 h-12 font-normal tracking-narrow bg-emerald-300 text-black">
                        <p>Average Cookies per Sale</p>
                        <input name="Average" />
                    </div>
                    <button
                        className="px-6 h-12 font-normal tracking-narrow bg-emerald-500 text-black"
                        type="submit">
                        Create
                    </button>
                </div>
            </div>
        </form>
          </div>
      </main>

      <footer className="p-4 bg-emerald-500 test-gray-50">
        &copy;2021
      </footer>
    </div>
  )
}
