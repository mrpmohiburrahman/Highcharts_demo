import React from 'react';
import { StyleSheet, View } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
              xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              },
              plotOptions: {
                series: {
                    events: {
                      },
                showInNavigator: true,
                  }
              },
        
              series: [
                { data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4] },
                // { data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4] }
              ]
            }
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1
    }
});
