import React, { Component, PropTypes } from 'react';

class Flag extends Component {

  static propTypes = {
    formFactor: PropTypes.oneOf(['square', 'normal']).isRequired,
    countryCode: PropTypes.string.isRequired,
    flagSize: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { formFactor, flagSize, className, countryCode } = this.props;
    const horizontalSquareSize = formFactor === 'square' ? flagSize : flagSize * 1.3333333;
    const inlineStyles = {
      base: {
        height: flagSize + 'em',
        width: horizontalSquareSize + 'em',
        backgroundSize: 'contain',
        position: 'relative',
        backgroundPostion: '50%',
        backgroundRepeat: 'no-repeat',
        display: 'inlineBlock',
        top: '2px',
        backgroundImage: require(`./flags/${formFactor}/${countryCode}.svg`)
      },
    };

    return (
      <span className={classNames(className)} style={inlineStyles.base}/>
    );
  }

}

export default Flag;
