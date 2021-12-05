import React from "react"
import { SearchbarContainer, SearchbarInput } from "styles/applications/Mail"

import { 
  IoReloadOutline, 
  IoAttachOutline 
} from "react-icons/io5"

const Searchbar: React.FC = () => {
  return (
    <SearchbarContainer>
      <SearchbarInput
        placeholder="Search"
      />

      <IoReloadOutline size={17} />
      <IoAttachOutline size={17} />
    </SearchbarContainer>
  )
}

export default Searchbar
