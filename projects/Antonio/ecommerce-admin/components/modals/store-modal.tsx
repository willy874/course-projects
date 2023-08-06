'use client'

import { useStoreModal } from '@/stores/modal-store'
import { Modal } from '../ui/modal'

export const StoreModal = () => {
  const storeModal = useStoreModal()

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={false}
      onClose={() => {}}
    >
      Future Create Store Form
    </Modal>
  )
}
