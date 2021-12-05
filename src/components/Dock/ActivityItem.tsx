import React from "react"
import { IActivity } from "types/WindowTypes"
import { ActivityContainer, ActivityInfo } from "styles/Dock"

interface Props {
  activity: IActivity;
}

const ActivityItem: React.FC<Props> = ({ activity }) => {
  return (
    <ActivityContainer>
      <img 
        alt="Activity Filetype Icon"
        src={activity.icon} 
      />

      <ActivityInfo>
        <h3> { activity.title } </h3>
        <p> { activity.description } </p>
      </ActivityInfo>
    </ActivityContainer>
  )
}

export default ActivityItem
