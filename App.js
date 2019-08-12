import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 0,
      value: 0,
      operator: "",
      check: 0
    };
  }

  setclear(){
    this.setState({
      text: 0,
      value: 0,
      value2: 0,
      operation: ""
    });
  }

  setnum(n){
    if(this.state.text == "0"){
      this.setState({
        text: n.toString(),
      });
    } else {
      if(this.state.check == 0){
        this.setState({
          text: this.state.text + n
        });
      } else if(this.state.check == 1){
        this.setState({
          text: n.toString(),
          check: 0
        });
      }
    }
  }

  setoperator(n){
    if(n == "+"){
      this.setState({
        value: parseInt(this.state.text),
        operator: "+",
        check: 1
      });
    } else if(n == "-") {
      this.setState({
        value: parseInt(this.state.text),
        operator: "-",
        check: 1
      });
    } else if(n == "*") {
      this.setState({
        value: parseInt(this.state.text),
        operator: "*",
        check: 1
      });
    } else if(n == "/") {
      this.setState({
        value: parseInt(this.state.text),
        operator: "/",
        check: 1
      });
    }
  }

  setequal(){
    if(this.state.operator == "+"){
      this.setState({
        text: (this.state.value + parseInt(this.state.text)).toString(),
        value: this.state.value + parseInt(this.state.text),
        operator: "",
        check: 1
      });
    } else if(this.state.operator == "-"){
      this.setState({
        text: (this.state.value - parseInt(this.state.text)).toString(),
        value: this.state.value - parseInt(this.state.text),
        operator: "",
        check: 1
      });
    } else if(this.state.operator == "*"){
      this.setState({
        text: (this.state.value * parseInt(this.state.text)).toString(),
        value: this.state.value * parseInt(this.state.text),
        operator: "",
        check: 1
      });
    } else if(this.state.operator == "/"){
      this.setState({
        text: (this.state.value / parseInt(this.state.text)).toString(),
        value: this.state.value / parseInt(this.state.text),
        operator: "",
        check: 1
      });
    }
  }

  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <Text
              style={{
                flex: 1,
                textAlign: 'right',
                fontSize: 60,
                color: 'white',
                paddingRight: 30,
              }}>
              {this.state.text}
            </Text>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity
              style={styles.buttongrey}
              onPress={() => this.setclear()}>
                <Text style={styles.textblack}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttongrey}>
                <Text style={styles.textblack}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttongrey}>
                <Text style={styles.textblack}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttonorange}
              onPress={() => this.setoperator("/")}>
                <Text style={styles.textwhite}>÷</Text>
              </TouchableOpacity>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(7)}>
                <Text style={styles.textblack}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(8)}>
                <Text style={styles.textblack}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(9)}>
                <Text style={styles.textblack}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttonorange}
              onPress={() => this.setoperator("*")}>
                <Text style={styles.textwhite}>x</Text>
              </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(4)}>
                <Text style={styles.textblack}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(5)}>
                <Text style={styles.textblack}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(6)}>
                <Text style={styles.textblack}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttonorange}
              onPress={() => this.setoperator("-")}>
                <Text style={styles.textwhite}>-</Text>
              </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(1)}>
                <Text style={styles.textblack}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(2)}>
                <Text style={styles.textblack}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.setnum(3)}>
                <Text style={styles.textblack}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttonorange}
              onPress={() => this.setoperator("+")}>
                <Text style={styles.textwhite}>+</Text>
              </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity
              style={styles.buttondark2}
              onPress={() => this.setnum(0)}>
                <Text style={styles.textblack}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttondark}
              onPress={() => this.onNum('7')}>
                <Text style={styles.textblack}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.buttonorange}
              onPress={() => this.setequal()}>
                <Text style={styles.textwhite}>=</Text>
              </TouchableOpacity>
          </View>        
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttongrey: {
    alignItems: 'center',
    width: 72,
    height: 70,
    backgroundColor: '#BDC3C7',
    margin: 4,
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonorange: {
    alignItems: 'center',
    width: 72,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#F39C12',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
  },
  buttondark: {
    alignItems: 'center',
    width: 72,
    height: 70,
    backgroundColor: '#4D5656',
    margin: 4,
    borderRadius: 100,
    borderWidth: 1,
  },
  buttondark2: {
    alignItems: 'center',
    width: 155,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#4D5656',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
  },
  textblack: {
    alignItems: 'center',
    height: 50,
    padding: 12,
    margin: 5,
    fontSize: 28,
    // fontWeight: 'bold'
  },
  textwhite: {
    alignItems: 'center',
    height: 50,
    padding: 13,
    fontSize: 30,
    color: 'white',
  },
});
