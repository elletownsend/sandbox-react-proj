import Card from './Card';

import './styles/CardList.css'

const CardList = (props) => {
    const cards = props.data.map(data => <Card data={data} key={data.id} viewInfo={props.viewInfo} />);

    return (
        <div className="cardList">
            {cards}
        </div>
    );
}

export default CardList;