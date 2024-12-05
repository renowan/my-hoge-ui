import type { Notification } from '../types'
// import { useState } from '#imports'
// import * as dateUtils from '../utils/dateUtils'

export function useToast() {
  // const notifications = useState<Notification[]>('notifications', () => [])

  function add(notification: Partial<Notification>) {
    const body = {
      id: `getUnixTime().toString()`,
      ...notification,
    }

    // const index = notifications.value.findIndex(
    //   (n: Notification) => n.id === body.id,
    // )
    // if (index === -1) {
    //   notifications.value.push(body as Notification)
    // }

    return body
  }

  function remove(id: string) {
    console.log('remove', id)
    // notifications.value = notifications.value.filter(
    //   (n: Notification) => n.id !== id,
    // )
  }

  return {
    add,
    remove,
  }
}
