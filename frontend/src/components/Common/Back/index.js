import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
export default function Back() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }
  return (
    <button onClick={handleBack}>
      <ArrowBackIosIcon className="text-3xl" />
    </button>
  )
}
