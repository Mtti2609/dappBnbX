import { BiMedal, BiBookOpen } from 'react-icons/bi'
import { FiCalendar } from 'react-icons/fi'

const Description = ({ apartment }) => {
  return (
    <div className="py-5 border-b-2 border-b-slate-200 space-y-4">
      <h1 className="text-xl font-semibold">Mô tả</h1>
      <p className="text-slate-500 text-lg w-full sm:w-4/5">{apartment?.description}</p>

      <div className=" flex space-x-4 ">
        <BiBookOpen className="text-4xl" />
        <div>
          <h1 className="text-xl font-semibold">Địa điểm</h1>
          <p className="cursor-pointer">{apartment?.location}</p>
        </div>
      </div>
      <div className=" flex space-x-4">
        <BiMedal className="text-4xl" />
        <div>
          <h1 className="text-xl font-semibold">Huân chương uy tín</h1>
          <p>
            Luôn được đánh giá cao,Chất lượng phòng tốt,Dịch vụ hoàn hảo
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Description
