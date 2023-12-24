export const MainBlockTextSection = ({primary, secondary, thierd}) => (
    <h1>
        <span className="primary-text-main-block">
            {primary}
        </span>
        <span className="secondary-text-main-block">
            {secondary}
        </span>
        <div className="thierd-text-main-block">{thierd}</div>
    </h1>
)