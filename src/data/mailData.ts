import { IMail } from "types/Apps"

const mailData: IMail[] = [
  {
    profilePicture: "assets/people/petrosk.jpeg",
    hasBeenRead: true,
    date: "10:29 AM",
    username: "Google Team",

    title: "Google's New Terms of Service",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida vulputate mollis. Duis varius pulvinar metus...",
      "Nunc non ex et velit imperdiet vulputate. Cras tempus mattis dui nec laoreet. Ut eget porttitor nisl. Vestibulum eu orci pretium, dignissim elit at, vulputate nunc. Vivamus at lacinia mi."
    ]
  },
  {
    profilePicture: "assets/people/petrosk.jpeg",
    hasBeenRead: false,
    date: "8:38 AM",
    username: "Katri Ahokas, Erik Nason",

    title: "Photos from our hike on Maple",
    content: [
      "Phasellus eget scelerisque nibh. Proin facilisis ligula egestas fermentum scelerisque. Mauris varius porttitor sodales. Nam diam lacus, mattis eget dui vel, malesuada sagittis ligula. Cras maximus nunc ut tortor malesuada condimentum. Duis finibus diam magna, tempor maximus mi elementum quis.", 
      "Cras sit amet arcu eget orci pretium malesuada eget in lorem. Quisque luctus elementum felis, vel mollis massa pretium id."
    ]
  }
]

export default mailData
