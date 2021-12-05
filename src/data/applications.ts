import { Apps } from "types/WindowTypes"

import Terminal from "applications/Terminal"
import About from "applications/About"
import Mail from "applications/Mail"

const defaultSettings = {
  width: 400,
  height: 400,
}

const applicationData: Apps = {
  about: {
    title: "About Windows",
    isResizable: false,
    isPinned: true,
    isActive: true,
    width: 400,
    height: 400,
    Component: About,
    icon: "help.png"
  },

  terminal: {
    title: "Terminal",
    isResizable: true,
    isPinned: true,
    isBorderless: true,
    isActive: false,
    width: 400,
    height: 300,
    Component: Terminal,
    icon: "terminal.png"
  },
  
  mail: {
    title: "Mail",
    isResizable: true,
    isPinned: true,
    isBorderless: true,
    isActive: false,
    width: 700,
    height: 400,
    Component: Mail,
    icon: "mail.png"
  },
  
  word: {
    ...defaultSettings,
    title: "Word",
    icon: "word.png"
  },
  
  calculator: {
    ...defaultSettings,
    title: "Calculator",
    icon: "calculator.png"
  },
  
  maps: {
    ...defaultSettings,
    title: "Maps",
    icon: "maps.png"
  },
  
  news: {
    ...defaultSettings,
    title: "News",
    icon: "news.png"
  },
  
  photos: {
    ...defaultSettings,
    title: "Photos",
    icon: "photos.png"
  },
  
  phone: {
    ...defaultSettings,
    title: "Your Phone",
    icon: "your-phone.png" 
  },
  
  settings: {
    ...defaultSettings,
    title: "Settings",
    icon: "settings.png"
  },
  
  groove: {
    ...defaultSettings,
    title: "Groove",
    icon: "groove.png"
  },
  
  snip: {
    ...defaultSettings,
    title: "Snipping Tool",
    icon: "snip.png"
  },
  
  teams: {
    ...defaultSettings,
    title: "Microsoft Teams",
    icon: "teams.png"
  },
  
  people: {
    ...defaultSettings,
    title: "Contacts",
    icon: "people.png"
  },
  
  voice: {
    ...defaultSettings,
    title: "Voice Recorder",
    icon: "voice.png"
  },
  
  powerpoint: {
    ...defaultSettings,
    title: "Powerpoint",
    icon: "powerpoint.png"
  },
  
  movies: {
    ...defaultSettings,
    title: "Movies & TV",
    icon: "movies.png"
  },
  
  github: {
    ...defaultSettings,
    title: "Github",
    icon: "github.png"
  }
}

export default applicationData
