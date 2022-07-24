import styled from "styled-components";

const Image = styled.img`
height: 140px;
width: 140px;
cursor: pointer;
`

export function SingleCard({ card, cover, handleChoice, flipped }) {
    const handleClick = () => {
        handleChoice(card)
    }
    const picture = <Image src={card.src} alt="card picture" />
    const coverImg = <Image
        className="cover"
        src={cover}
        onClick={handleClick}
        alt='card cover' />


    return <>
        <div className="card" >
            <div>
                {flipped ? picture : coverImg}

            </div>
        </div>
    </>
}