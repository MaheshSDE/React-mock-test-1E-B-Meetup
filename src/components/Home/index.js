import {Link} from 'react-router-dom'

import Header from '../Header'

import registerContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './style'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <registerContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </registerContext.Consumer>
  )
}
export default Home
