import styled from "styled-components";

const Image = styled.img`
height: 100px;
width: 100px;
`

export function SingleCard({ card, cover, handleChoice }) {

    const handleClick = () => {
        handleChoice(card)
    }
    return <>
        <div className="card" >
            <div>
                <Image className="picture" src={card.src} alt="card picture" />
                <Image
                    className="cover"
                    src={cover}
                    onClick={handleClick}
                    alt='card cover' />
            </div>
        </div>
    </>
}