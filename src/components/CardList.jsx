import Card from './Card';

import './styles/CardList.css'

const CardList = ({ data }) => {
    const cards = data.map(data => <Card data={data} key={data.id} />);

    return (
        <div className="card-list">
            {cards}
        </div>
    );
}

export default CardList;