import styled from 'styled-components'
import Card from './Card'

const List = styled.div`
    margin: 0 110px 96px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
`

const CardList = (props) => {
    const cards = props.data.slice(0).reverse().map(data => <Card data={data} key={data.id} viewInfo={props.viewInfo} />);

    return (
        <List>
            {cards}
        </List>
    );
}

export default CardList;