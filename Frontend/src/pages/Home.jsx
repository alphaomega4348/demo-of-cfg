// Home.jsx
import Card from "../components/Card"

const Home = () => {
  const cards = [1, 2, 3]; // replace this with your actual data

  return (
    <div className="p-10">
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-blue-600">Vowels of People Association</h1>
            <div className="">
                <img className="h-16 w-16 rounded-full" src="https://avatar.iran.liara.run/public"  alt="kjsadkl" />
            </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
          {cards.map((card, index) => (
            <div className="w-full md:w-1/3 px-2" key={index}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home