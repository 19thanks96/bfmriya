export const LinkTo = ({href, children}) => {
    return (
      <a href={href} >
        <div className="underline">{children}</div>
      </a>
    );
  };