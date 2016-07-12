import { Client } from 'irc'

let instance = null

export default class Connection {

  constructor({ server, nick, userName, realName, channels, listeners }) {
    if (instance) {
      return
    }

    this.client = new Client(server, nick, {
      userName,
      realName,
      channels,
      port: 6667,
      showErrors: true,
      autoConnect: false,
      debug: process.env.NODE_ENV === 'development',
    })

    Object.keys(listeners).forEach(event => {
      this.client.addListener(event, listeners[event])
    })

    instance = this
  }

  connect = () => {
    this.client.connect(0)
  }

  join = ({ channels }) => {
    this.client.join(channels)
  }

  say = ({ channel, message }) => {
    this.client.say(channel, message)
  }

}
