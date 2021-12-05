import {
  IoGridOutline,
  IoSwapVertical,
  IoListOutline,
  IoReturnDownBack,
  IoAddCircleOutline,
  IoShapesOutline,
  IoExpand
} from "react-icons/io5"

interface ContextMenuItem {
  text: string;
  icon: any;
}

const contextMenuData: ContextMenuItem[] = [
  {
    text: "View",
    icon: IoGridOutline
  },
  {
    text: "Sort By",
    icon: IoSwapVertical
  },
  {
    text: "Group By",
    icon: IoListOutline
  },
  {
    text: "Undo Return",
    icon: IoReturnDownBack
  },
  {
    text: "New Item",
    icon: IoAddCircleOutline
  },
  {
    text: "Properties",
    icon: IoShapesOutline
  },
  {
    text: "Show more options",
    icon: IoExpand
  }
]

export default contextMenuData
