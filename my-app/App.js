import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  scrollToSection = () => {
    this.sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: 2,
      itemIndex: 0,
      viewPosition: 0
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.scrollToSection}
          title="Scroll"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <SectionList
          ref={ref => (this.sectionListRef = ref)}
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={[
            {
              title: 'Title1',
              data: [
                'item1',
                'item2',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4'
              ]
            },
            {
              title: 'Title2',
              data: [
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4'
              ]
            },
            { title: 'Title3', data: ['item5', 'item6'] }
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  }
});
