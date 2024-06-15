import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to="/table">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col cursor-pointer">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">CLASS 1</div>
          <p className="text-gray-700 text-base">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel quas incidunt blanditiis quisquam eos tempora recusandae iusto nemo quidem! Voluptas repellat ad itaque nisi, rem dolorum quis expedita! Ipsam beatae, provident consequatur explicabo assumenda quasi autem dolor accusamus cumque asperiores velit inventore quae. Repellendus perspiciatis commodi fuga vitae, in cupiditate odio ullam eligendi. Temporibus, fugiat?
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card