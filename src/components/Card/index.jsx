export default function Card({ title, sub_title, link, text, footer }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a href={link} className="text-decoration-none text-white"><h4 className="card-title">{title}</h4></a>
          <h6 className="card-subtitle"> {sub_title} </h6>
        </div>
        <div className="card-body">
          <div className="card-text"> {text} </div>
        </div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </>
  );
}
