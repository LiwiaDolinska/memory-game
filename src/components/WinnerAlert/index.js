import { WinnerBox } from "./style";

export function WinnerAlert({ winners }) {
    const mappedWinners = winners.map((winnerIdx) => winnerIdx + 1)
    return (<WinnerBox>
        {winners.length >= 2 ? (
            <h1>Wygrali gracze {mappedWinners.join(', ')} !</h1>
        ) : (
            <h1>Wygrał gracz {winners[0] + 1} !</h1>
        )
        }



    </WinnerBox>)
}
