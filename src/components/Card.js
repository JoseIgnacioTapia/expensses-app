import './Card.css';

const Card = props => {
  const classes = 'card ' + props.className; // Use this to add a external extra className in the Component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
