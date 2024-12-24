import { Card } from '.'

const Collection = ({ appartments }) => {
  return (
    <div className="py-8 px-14 flex justify-center flex-wrap space-x-4 w-full">
      {appartments.map((room, i) => (
        <Card appartment={room} key={i} />
      ))}
      {appartments.length < 1 && <span>Chưa có căn hộ nào cho thuê cả!</span>}
    </div>
  )
}

export default Collection
