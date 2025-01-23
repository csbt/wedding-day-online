import { createSelectors } from '@/helpers/zustand'
import { WeddingInfo } from '@/types/Wedding'
import { create } from 'zustand'

type State = {
  weddingInfo: WeddingInfo | null
}

type Actions = {
  setWeddingInfo: (weddingInfo: WeddingInfo) => void
}
const useAppStoreBase = create<State & Actions>()((set) => ({
  weddingInfo: null,
  setWeddingInfo: (weddingInfo) => set({ weddingInfo })
}))

export const useAppStore = createSelectors(useAppStoreBase)
