import create from "zustand"
import mailData from "data/mailData"
import { IMail } from "types/Apps"

interface MailState {
  selectedMail: IMail;
  setSelectedMail: (value: IMail) => void;
}

const useMailStore = create<MailState>(set => ({
  selectedMail: mailData[0],
  setSelectedMail: (value: IMail) => {
    set(state => ({ selectedMail: value }))
  }
}))

export default useMailStore
