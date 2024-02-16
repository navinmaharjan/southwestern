import Banner from './Banner'
import BoardOfDirectors from './BoardDirectors'
import InspirationalMessages from './InspirationalMessasges'
import Introduction from './Introduction'
import LifeAt from './LifeAt'
import Quote from './Quote'
import WhySouthwestern from './WhySouthwetern'

const Home = () => {
  return (
    <>
        <Banner />
        <Introduction />
        <WhySouthwestern />
        <Quote />
        <InspirationalMessages />
        <LifeAt />
        <BoardOfDirectors />
        
    </>
  )
}

export default Home