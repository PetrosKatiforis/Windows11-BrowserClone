import { IActivity } from "types/WindowTypes"

interface DockData {
  activity: IActivity[];
}

const dockData: DockData = {
  activity: [
    {
      title: "Rental Agreement",
      description: "Yesterday at 1:15 PM",
      icon: "assets/icons/word_file.png"
    },
    {
      title: "School Presentation",
      description: "Recently added",
      icon: "assets/icons/powerpoint_file.png"
    },
    {
      title: "Vaccination in Europe",
      description: "2 weeks ago",
      icon: "assets/icons/word_file.png"
    }
  ]
}

export default dockData
