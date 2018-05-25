import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  scrollToSection = (x) => {
    this.sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: x,
      itemIndex: 0,
      viewPosition: 0
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Example Address Book</Text>
        <View style={styles.addressBook}>
          <View style={styles.listWrapper}>
            <SectionList
              ref={(ref) => (this.sectionListRef = ref)}
              renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
              )}
              sections={[
                {
                  title: 'A',
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
                  title: 'B',
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
                {
                  title: 'C',
                  data: [
                    'item5',
                    'item6',
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
                {
                  title: 'D',
                  data: [
                    'item5',
                    'item6',
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
                {
                  title: 'E',
                  data: [
                    'item5',
                    'item6',
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
                {
                  title: 'F',
                  data: [
                    'item5',
                    'item6',
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
                }
              ]}
              keyExtractor={(item, index) => item + index}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => this.scrollToSection(0)} title="A" color="#841584" />
            <Button onPress={() => this.scrollToSection(1)} title="B" color="#158484" />
            <Button onPress={() => this.scrollToSection(2)} title="C" color="#848415" />
            <Button onPress={() => this.scrollToSection(3)} title="D" color="#DD3300" />
            <Button onPress={() => this.scrollToSection(4)} title="E" color="#33DD00" />
            <Button onPress={() => this.scrollToSection(5)} title="F" color="#DD0033" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  addressBook:{
    flexDirection: 'row'
  },
  listWrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonWrapper: {
    flexDirection: 'column',
    width: 30
  }
});
