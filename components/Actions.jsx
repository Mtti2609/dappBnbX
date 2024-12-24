import Link from 'next/link'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import { toast } from 'react-toastify'
import { deleteApartment } from '@/services/blockchain'

const Actions = ({ apartment }) => {
  const navigate = useRouter()
  const { address } = useAccount()

  const handleDelete = async () => {
    if (confirm(`Bạn có chắc muốn xóa  ${apartment?.id}?`)) {
      await toast.promise(
        new Promise(async (resolve, reject) => {
          await deleteApartment(apartment?.id)
            .then((tx) => {
              console.log(tx)
              navigate.push('/')
              resolve(tx)
            })
            .catch(() => reject())
        }),
        {
          pending: 'Thực hiện giao dịch...',
          success: 'Xóa thành công 👌',
          error: 'Xảy ra lỗi 🤯',
        }
      )
    }
  }

  return (
    <div className="flex justify-start items-center space-x-3 border-b-2 border-b-slate-200 pb-6">
      {address == apartment?.owner && (
        <>
          <Link
            href={'/room/edit/' + apartment?.id}
            className="p-2 rounded-md shadow-lg border-[0.1px]
              border-gray-500 flex justify-start items-center space-x-1
              bg-gray-500 hover:bg-transparent hover:text-gray-500 text-white"
          >
            <CiEdit size={15} />
            <small>Chỉnh sửa</small>
          </Link>
          <button
            className="p-2 rounded-md shadow-lg border-[0.1px]
              border-pink-500 flex justify-start items-center space-x-1
              bg-pink-500 hover:bg-transparent hover:text-pink-500 text-white"
            onClick={handleDelete}
          >
            <MdDeleteOutline size={15} />
            <small>Xóa căn hộ</small>
          </button>
        </>
      )}
    </div>
  )
}

export default Actions
