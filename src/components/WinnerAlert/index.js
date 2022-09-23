import { WinnerBox } from "./style";

export function WinnerAlert({ winners }) {

    return <WinnerBox>
        <h1>Wygrał gracz {parseFloat(winners) + 1} !</h1></WinnerBox>
}