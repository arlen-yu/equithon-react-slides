export const whoLovesReact = `
const styles = {
  root: {
    fontSize: 32,
    fontWeight: 600
  }
}

class WhoLovesReact extends React.Component {
  render () {
    return (
      <div style={styles.root}>{this.props.name} loves React.js.</div>
    )
  }
}

render(<WhoLovesReact name='Who' />)
`

export const unobtrusiveJS = `// JQuery

<button class='something'>Do Something</button>

$('.something').click(function () {
  console.log('You clicked the button!')
})
`

export const withJSX = `// JSX

<button onClick={() => { console.log('You clicked the button!') }}>Do Something</button>
`

export const whoLovesReactComponentClass = `
class WhoLovesReact extends React.Component {
  render () {
    return (
      <div style={styles.root}>{this.props.name} loves React.js.</div>
    )
  }
}
`

export const whoLovesReactComponentFunction = `
const WhoLovesReactFunctional = (props) => {
  return (
    <div style={styles.root}>{this.props.name} loves React.js.</div>
  )
}
`

export const counter = `
const styles = {
  root: {
    borderRadius: 2,
    padding: '10px 40px',
    background: '#1f8ceb',
    color: 'white',
    fontWeight: 600,
    fontSize: 20
  }
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <button onClick={() => { this.setState({ count: this.state.count + 1 }) }} style={styles.root}>
        {this.state.count}
      </button>
    )
  }
}

render(<Counter />)
`

export const counterComplex = `
const styles = {
  root: {
    borderRadius: 2,
    padding: '10px 40px',
    background: '#1f8ceb',
    color: 'white',
    fontWeight: 600,
    fontSize: 20
  }
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // This is a lifecycle method!
  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    this.interval && clearInterval(this.interval)
  }

  render () {
    return (
      <button onClick={() => { this.setState({ count: this.state.count * 2 }) }} style={styles.root}>
        {this.state.count}
      </button>
    )
  }
}

render(<Counter />)
`