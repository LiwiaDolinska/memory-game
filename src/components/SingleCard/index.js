import styled from "styled-components";

const Image = styled.img`
height: 100px;
width: 100px;
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
        <div className="card" style={{ width: "170px" }} >
            <div>
                {flipped ? picture : coverImg}

            </div>
        </div>
    </>
}