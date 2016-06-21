import React from 'react';


export default function Icon(props) {
  let name = 'IconName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media icon">
      <div className="icon-close">x</div>
      <img
        src={props.img}
        alt={props.alt ? props.alt : 'icon'}
        className="o-media__img icon-img"
      />
      <div className="o-media__body">
        {name}
      </div>
    </div>
  );
}


Icon.propTypes = {
  alt: React.PropTypes.string,
  name: React.PropTypes.string,
  img: React.PropTypes.string,
};
