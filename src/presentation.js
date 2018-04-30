// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction,
  Code,
  Fit,
  CodePanel
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import examples
import {
  whoLovesReact,
  whoLovesReactComponentClass,
  whoLovesReactComponentFunction,
  counter,
  counterComplex,
  unobtrusiveJS,
  withJSX
} from './examples'

// Require CSS
require('normalize.css')

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE'
}, {
  primary: 'Roboto',
  secondary: 'Roboto'
})

// https://medium.freecodecamp.org/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={300} theme={theme} progress='pacman'>
        <Slide
          transition={['slide']}
          bgColor='secondary'
        >
          <Image src={'images/reactjs.png'} height={100} margin='40px auto' />
          <Heading size={1} fit lineHeight={1} textColor='primary'>
            You should probably learn React.js
          </Heading>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor='secondary'
        >
          <Heading size={6} textColor='primary'>A brief history</Heading>
          <List textColor='primary'>
            <Appear order={1}><ListItem>Developed by Facebook</ListItem></Appear>
            <Appear order={2}><ListItem>Deployed on FB newsfeed in 2011, Instagram in 2012</ListItem></Appear>
            <Appear order={3}><ListItem>Nowadays used in just about everything</ListItem></Appear>
            <Appear order={4}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <i style={{ marginLeft: 30, fontSize: 40 }} class="fab fa-facebook-f" />
                <i style={{ marginLeft: 30, fontSize: 40 }} class="fab fa-instagram" />
                <i style={{ marginLeft: 30, fontSize: 40 }} class="fab fa-reddit-alien" />
                <i style={{ marginLeft: 30, fontSize: 40 }} class="fab fa-dropbox" />
                <i style={{ marginLeft: 30, fontSize: 40 }} class="fab fa-pinterest" />
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor='secondary'
        >
          <Image src={'images/people-love-react.png'}/>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor='primary'
          notes={`
            This is supposed to be begginer to intermediate level so i'll skim over a lot of this.
            If you want to have a better overview I would first recommend visiting the official react docs.
          `}
        >
          <Heading size={1} textColor='secondary'>So what is it exactly? 🤔</Heading>
        </Slide>
        <Slide transition={['slide']} bgColor='secondary' textColor='primary'>
          <List  textColor='primary'>
            <ListItem textSize={34}>A javascript library for building user interfaces</ListItem>
            <Appear order={2}><ListItem textSize={34}>Splits complex user interfaces into simple components</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Pioneered the virtual DOM</ListItem></Appear>
            <Appear order={4}><ListItem textSize={34}>Introduced JSX</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor='secondary'>Virtual DOM</Heading>
        </Slide>
        <Slide transition={['slide']} bgColor='secondary' textColor='primary'>
          <List  textColor='primary'>
            <ListItem>DOM is the Document Object Model; a tree-like structure for your document</ListItem>
            <Appear order={2}><ListItem>Virtual DOM is a representation of the DOM</ListItem></Appear>
            <Appear order={3}><ListItem>Manipulating the DOM? Slow. Manipulating the Virtual DOM? Fast ⚡</ListItem></Appear>
            <Appear order={4}><ListItem>Identifies what has changed</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor='primary'
          textColor='secondary'
          notes={`
          Stay on this slide for a while. Build up the narrative that people hated JSX when it first came out.
          `}
        >
          <Heading size={1} fit textColor='secondary'>WTF is JSX</Heading>
        </Slide>
        <Slide
          bgColor='secondary'
        >
          <BlockQuote>
            <Quote>While I’ve come to love JSX, anytime I introduce it to a new developer, I feel like I’m showing off my ugly baby.</Quote>
            <Cite>Cory House of reactjsconsulting.com</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          notes={`
          This seemed like a great idea. Our HTML is totally pure! But then we realized some problems: Uh, how can I tell that these two lines are interconnected? Answer: I can’t unless I read every single line of JavaScript. With this pattern, you can’t change a line of markup without checking every single line of JavaScript to assure you’re not breaking a selector. You see, there’s no actual separation going on here. Sure, the JS and HTML are in separate files, but these two technologies are fundamentally joined at the hip. They must move in lockstep or the application will crash. Strictly separating HTML and JS actually led to applications that were harder to maintain and debug. Each time you wanted to change a line of markup, you had to worry about breaking a jQuery selector. Perhaps if we relaxed our religious devotion to separation of concerns, we could relieve some of this pain? This ushered in phase 2…`}
        >
          <Heading size={6}>The Good Old Days: Unobtrusive Javascript</Heading>
          <Layout>
            <Fill><Image src={'images/unobtrusiveJS.png'} /></Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={6}>Using JSX:</Heading>
          <Layout>
            <Fill><Image src={'images/withJSX.png'} /></Fill>
          </Layout>
        </Slide>
        <Slide
          bgColor='primary'
        >
          <Heading size={1} textColor='secondary'>Components in React</Heading>
        </Slide>
        <Slide
          bgColor='primary'
        >
          <Heading size={6} textColor='secondary'>A Simple Component</Heading>
          <Layout>
            <Fill><Image src={'images/simpleExample.png'} /></Fill>
          </Layout>
        </Slide>
        <Slide bgColor='primary'>
          <Image src='images/tree1.png' />
        </Slide>
        <Slide bgColor='primary'>
          <Image src='images/tree2.png' />
        </Slide>
        <Slide
          bgColor='primary'
        >
          <Image src='images/tree3.png' />
        </Slide>
        <Slide
          bgColor='primary'
        >
          <Image src='images/tree4.png' />
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
        >
          <Heading size={6} fit caps>key design tip #1</Heading>
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
        >
          <Heading size={6} caps>Use dumb components</Heading>
          <Heading size={6} caps>Use Smart components</Heading>
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
        >
          <Heading textColor='secondary' size={6}>Dumb components:</Heading>
          <List textColor='secondary'>
            <Appear order={1}><ListItem textSize={34}>Are presentational</ListItem></Appear>
            <Appear order={2}><ListItem textSize={34}>Have very little dependencies</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Receieve all functionality via props</ListItem></Appear>
            <Appear order={4}><ListItem textSize={34}>Are written as a functional component</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
        >
          <Heading textColor='secondary' size={6}>Smart components:</Heading>
          <List textColor='secondary'>
            <Appear order={1}><ListItem textSize={34}>Concerned with how things work</ListItem></Appear>
            <Appear order={2}><ListItem textSize={34}>Provide data to other components</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Have state</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          bgColor='secondary'
          textColor='primary'
        >
          <Heading size={6} textColor='primary' fit caps>key design tip #2</Heading>
        </Slide>
        <Slide
          bgColor='secondary'
          textColor='primary'
        >
          <Heading size={6} textColor='primary' caps>avoid closures, use handlers</Heading>
        </Slide>
        <Slide
          bgColor='secondary'
          textColor='primary'
        >
          <Heading size={6} textColor='primary'>Don't do this</Heading>
          <CodePane
            lang={'jsx'}
            source={`
<SomeComponent
  onChange={(e) => {
    e.preventDefault()
    console.log('something')
  }}
  onSubmit={(e) => {
    const yes = 'something' + 'else'
    console.log(yes)
  }}
  reallyComplexLogicFunc={() => {
    // complex
  }}
/>`}
          />
        </Slide>
        <Slide
          bgColor='secondary'
          textColor='primary'
        >
          <Heading size={6} textColor='primary'>Do this</Heading>
          <CodePane
            lang={'jsx'}
            source={`
<SomeComponent
  onChange={this.handleOnChange}
  onSubmit={this.handleOnSubmit}
  reallyComplexLogicFunc={this.handleReallyComplexLogicFunc}
/>`}
          />
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
        >
          <Heading textColor='secondary' size={6}>Lifecycle methods</Heading>
          <CodePane
            lang='jsx'
            source={`
class Equithon extends Component {
  constructor (props) {
  }
    
  componentWillMount () {
  }
    
  componentDidMount () {
  }
    
  componentWillReceiveProps (nextProps) {
  }
    
  shouldComponentUpdate (nextProps, nextState) {
  }
    
  componentDidUpdate (prevProps, prevState) {
  }
    
  componentWillUnmount () {
  }
  
  render () {
  }
}
            `}
          />
        </Slide>
      </Deck>
    )
  }
}
