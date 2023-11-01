import { Button } from "../../../../../shared/Button/Button";

export const MainBlockTextSection = ({primary, secondary, thierd}) => (
    <>
        <span className="primary-text-main-block">
            {primary}
        </span>
        <span className="secondary-text-main-block">
            {secondary}
        </span>
        <div className="thierd-text-main-block">{thierd}</div>
    </>
)