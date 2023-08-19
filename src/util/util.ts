import { useToast } from 'vue-toast-notification'

export const openToast = (msg: string) => {
  const $toast = useToast()
  return $toast.success(msg, { duration: 3000 })
}
