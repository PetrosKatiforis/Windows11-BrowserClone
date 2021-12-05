import React from "react"
import { Activities } from "styles/Dock"

import dockData from "data/dock"
import ActivityItem from "components/Dock/ActivityItem"
import DockTitle from "components/Dock/DockTitle"

const RecommendedApps: React.FC = () => {
  return (
    <React.Fragment>
      <DockTitle
        title="Recommended"
        buttonText="More"
      />

      <Activities>
        {dockData.activity.map(activity => (
          <ActivityItem 
            key={activity.title}
            activity={activity}
          />
        ))}
      </Activities>
    </React.Fragment>
  )
}

export default RecommendedApps
