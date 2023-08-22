import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiReact, DiWordpress } from "react-icons/di"

const tech = () => {
  return (


    <div className="px-9 space-y-2">
      <h1 className="text-center text-2xl font-extrabold">Technologies I used:</h1>


      <div className="grid grid-cols-4 gap-4 justify-center md:grid-cols-2 sm:grid-cols-1">

        <DiHtml5 className="hover:scale-150 delay-200 duration-200 " color="red" size={200} />
        <DiCss3 className="" size={200} />
        <DiJavascript size={200} />
        <DiReact className="animate-spin" color="" size={200} />
        <DiWordpress size={200} />
        <DiBootstrap size={200} />
      </div>

    </div>
  )
}
export default tech