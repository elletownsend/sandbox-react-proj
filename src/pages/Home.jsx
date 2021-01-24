import NavBar from '../components/NavBar'
import Header from '../components/Header'
import CardList from '../components/CardList'
import AddProfileBtn from '../components/AddProfileBtn'

export const Home = (props) => {
    return (
        <>
            <NavBar />
            <Header handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
            <CardList viewInfo={props.viewInfo} data={props.data} />
            <AddProfileBtn />
        </>
    )
}

export default Home;