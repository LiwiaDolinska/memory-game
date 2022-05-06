import styled from "styled-components";

export function SingleCard() {
    return <>
        <div className="card" key={card.id}>
            <div>
                <Image className="picture" src={card.src} alt="card picture" />
                <Image className="cover" src="/cards/gameCards/cover.jpg" alt='card cover' />
            </div>
        </div>
    </>
}