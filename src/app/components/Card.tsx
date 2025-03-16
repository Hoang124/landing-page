import Image from 'next/image';
import TagNew from 'public/assets/tag-new.svg';
import TagHot from 'public/assets/tag-hot.svg';

interface ICard {
    title: string,
    tag: string,
    imgSrc: string,
}

interface IProps {
    game: ICard;
}

const Card = (props: IProps) => {
    const { game } = props;

    return (
        <div className="relative card">
            {game.tag === 'NEW' && <TagNew className='card-tag' />}
            {game.tag === 'HOT' && <TagHot className='card-tag' />}
            <Image src={game.imgSrc} alt={game.title} fill className="object-cover rounded-lg" />
            <p className="card-title">{game.title}</p>
        </div>
    );
}

export default Card;