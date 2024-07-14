import { intro } from '@/lib/data'
import Innovations from './components/Innovations'

export default function Home() {
  return (
    <>
      <div className="prose mx-auto mb-4 max-w-screen-lg border-b-2 border-slate-700 p-6 text-slate-100 lg:prose-lg xl:prose-xl prose-h1:text-white lg:p-0 lg:py-12">
        <h1 className="text-center">Instructional Technology Leaders</h1>
        <div className="prose mx-auto text-slate-100 lg:prose-lg xl:prose-xl">
          {intro.paragraph1 && <p>{intro.paragraph1}</p>}
          {intro.paragraph2 && <p>{intro.paragraph2}</p>}
        </div>
      </div>
      <div>
        <Innovations />
      </div>
    </>
  )
}
