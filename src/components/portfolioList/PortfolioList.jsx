import './portfolioList.scss';

export default function PortfolioList({title, active, setSelected, id}) {
    return (
        <li className={active ? "portfoliList active": "portfoliList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
