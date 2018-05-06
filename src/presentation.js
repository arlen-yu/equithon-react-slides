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
          notes={
            <ul>
              <li>Did ya'll notice reddit was looking different</li>
              <li>Pinterest gestalt</li>
            </ul>
          }
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
        <Slide
          bgColor='secondary'
          textColor='primary'
          notes={
          <ul>
            <li>
              React is JUST THE VIEW LAYER (more or less)
              <ul><li>Based on this idea: what if you could create your own HTML element that has custom functionality</li></ul>
            </li><br />
            <li>
              Components manage their own states, and then are composed together. They're self contained, and composable. For example, take a phone.
              <ul>
                <li>
                  This is a huge plus of React. It makes your code extremely reusable, and a lot easier to debug.
                </li>
              </ul>
            </li>
          </ul>
          }
        >
          <List textColor='primary'>
            <ListItem textSize={34}>An open source javascript library for building user interfaces</ListItem>
            <Appear order={2}><ListItem textSize={34}>Splits complex user interfaces into simple components</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Pioneered the virtual DOM</ListItem></Appear>
            <Appear order={4}><ListItem textSize={34}>Introduced JSX</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor='secondary'>Virtual DOM</Heading>
        </Slide>
        <Slide
          bgColor='secondary'
          textColor='primary'
          notes={
            <ul>
              <li>DOM is a programming interface for HTML and XML documents. It represents a page so that it can be modified.</li><br />
              <li>
                Manipulating the DOM can be really slow sometimes.
                <ul>
                  <li>For example, checking off an item in a list will often rerender the whole list</li>
                  <li>This slowness has a huge impact, especially in modern web applications where the DOM is being manupulated constantly</li>
                </ul>
              </li><br />
              <li>
                Virtual DOM is fast.
                <ul>
                  <li>Once the virtual DOM is updated, it compares it with the snapshot of the virtual DOM before the update and identifies exactly what has changed</li>
                </ul>
              </li>
            </ul>
          }
        >
          <List textColor='primary'>
            <ListItem>DOM is the Document Object Model; a tree-like structure for your document</ListItem>
            <Appear order={2}><ListItem>Virtual DOM is a representation of the DOM</ListItem></Appear>
            <Appear order={3}><ListItem>Manipulating the DOM? Slow. Manipulating the Virtual DOM? Fast ⚡</ListItem></Appear>
            <Appear order={4}><ListItem>Identifies what has changed</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          bgColor='primary'
          textColor='secondary'
          notes={
            <ul>
              <li>People really didn't like JSX when it first came out. It was viewed at as anti-pattern, and seen as a horrendous intermingle of HTML and JS</li>
            </ul>
          }
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
          notes={
            <ul>
              <li>At first, this is how JavaScript and interacted. Completely Seperate.</li><br />
              <li>
                There's a few problems with this. How can I tell what is connected with what?
                <ul>
                  <li>You can't really. Unless you read every single line, a pain in the ass.</li>
                  <li>Essentially completely seperate but only semantically, you still have to treat them as a collection if you want to make changes to the code.</li>
                </ul>
              </li><br />
            </ul>
          }
        >
          <Heading size={6}>The Good Old Days: Unobtrusive Javascript</Heading>
          <Layout>
            <Fill><Image src={'images/unobtrusiveJS.png'} /></Fill>
          </Layout>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>A marriage of HTML and JS, living in harmony</li>
              <li>Rather than putting JS in HTML, React treats in more as putting HTML in JS</li>
            </ul>
          }
        >
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
          notes={
            <ul>
              <li>
                Key things to note:
                <ul>
                  <li>This is one way to write components which uses ES6 class notation</li>
                  <li>Class components have a function called render which returns the JSX of the component</li>
                  <li>They have a lot more special functions called "lifecycle functions" which we'll touch on later</li>
                </ul>
              </li>
            </ul>
          }
        >
          <Heading size={6} textColor='secondary'>A Simple Component</Heading>
          <Layout>
            <Fill><Image src={'images/simpleExample.png'} /></Fill>
          </Layout>
        </Slide>
        <Slide
          bgColor='primary'
          notes={
            <ul>
              <li>Put simply, they're parameters for customizing your components</li>
              <li>Is also a key proponent to what makes our components reusable (gestalt)</li>
            </ul>
          }
        >
          <Heading size={6} textColor='secondary'>Props (short for properties)</Heading>
          <List textColor='secondary'>
            <Appear order={1}><ListItem textSize={34}>"Parameters" you can pass to your components</ListItem></Appear>
            <Appear order={2}><ListItem textSize={34}>Accessible through a this.props object</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Data flows downwards via props</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Props are immutable</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading size={6} textColor='secondary'>State</Heading>
          <List textColor='secondary'>
            <Appear order={1}><ListItem textSize={34}>Managed within a Component</ListItem></Appear>
            <Appear order={2}><ListItem textSize={34}>Used for mutable data</ListItem></Appear>
            <Appear order={3}><ListItem textSize={34}>Use setState to update a components state</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading size={6} textColor='secondary'>https://github.com/arlen-yu/equithon-react-boilerplate</Heading>
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
          <Heading size={6} fit caps>key design tip</Heading>
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
