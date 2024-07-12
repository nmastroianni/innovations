import Innovations from './components/Innovations'

export default function Home() {
  return (
    <>
      <div className="prose lg:prose-lg xl:prose-xl prose-h1:text-white mx-auto mb-4 max-w-screen-lg border-b-2 border-slate-700 py-6 lg:py-12">
        <h1 className="text-center">Instructional Technology Leaders</h1>
      </div>
      <div>
        <Innovations />
      </div>
    </>
  )
}
