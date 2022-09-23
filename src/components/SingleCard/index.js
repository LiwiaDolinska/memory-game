import styled from "styled-components";

const Image = styled.img`
height: ${props => props.isSmall ? "110px" : "140px"};
width: ${props => props.isSmall ? "110px" : "140px"};
cursor: pointer;
`

export function SingleCard({ card, cover, handleChoice, flipped, isSmall }) {
    console.log(isSmall)
    const handleClick = () => {
        handleChoice(card)
    }
    const picture = <Image src={card.src} alt="card picture" isSmall={isSmall} />
    const coverImg = <Image
        className="cover"
        src={cover}
        onClick={handleClick}
        alt='card cover'
        isSmall={isSmall}
    />


    return <>
        <div className="card" >
            <div>
                {flipped ? picture : coverImg}

            </div>
        </div>
    </>
}