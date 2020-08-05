import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {data} from '../../resources/data/data';

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

function SubGalllery({route}) {
  const [dataSource, setDataSource] = useState(null);

  const routeType = route.name;

  useEffect(() => {
    // mock data fetch {use data}
    const displayData = data.filter((item) => item.type === routeType);

    setDataSource(displayData);
  }, [setDataSource, routeType]);

  return (
    <View style={styles.MainContainer}>
      <Text>{routeType}</Text>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
            <Image style={styles.imageThumbnail} source={{uri: item.src}} />
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

SubGalllery.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubGalllery;
