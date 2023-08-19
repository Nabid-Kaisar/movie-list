import { useToast } from 'vue-toast-notification'

type ToastType = 'success' | 'info' | 'error' | 'warning' | 'default'

export const openToast = (msg: string, type?: ToastType) => {
  const $toast = useToast()
  return $toast.success(msg, { duration: 3000, position: 'top', type })
}
