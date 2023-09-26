const Card = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
    </>
  );
}

const Header = ({ link, title, sub_title }) => {
  return (
      <div className="card-header">
        <a href={link} className="text-decoration-none text-white">
          <h4 className="card-title">{title}</h4>
        </a>
        <h6 className="card-subtitle"> {sub_title} </h6>
      </div>
  );
};

const Body = ({text}) => {
  return (
    <div className="card-body">
      <div className="card-text"> {text} </div>
    </div>
  );
};

const Footer = (props) => {
  const { children } = props;
  return <div className="card-footer">{children}</div>;
};

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card