import React from 'react';
import {Card} from 'react-native-elements';

const ShadowCard = (props) => {
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
        borderColor: 'rgb(0,119,181)',
        flex: 1,
        backgroundColor: 'rgb(56,161,240)',
        // backgroundColor: 'rgb(0,119,181)'

        // backgroundColor:RGB: 66,103,178

    }),
};

export default ShadowCard;
