import React from 'react';
import {Card} from 'react-native-elements';

const StoreShadowCard = (props) => {
  const {children, rounded, ...otherProps} = props;
  return (
    <Card containerStyle={styles.shadow(rounded)} {...otherProps}>
      {children}
    </Card>
  );
};

const styles = {
  shadow: (rounded) => ({
    borderRadius: rounded ? 15 : undefined,
    shadowColor: 'black',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }),
};

export default StoreShadowCard;
